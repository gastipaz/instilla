import express from "express";
import cors from "cors";
import axios from "axios";
import path from "path";

const port = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + "/public")))

function calculatePrice(price, tax, isImported) {
    let importTax = isImported ? (price * 5 / 100) : 0;
    let salesTax = tax > 0 ? (price * tax / 100) : 0;
    let totalTax = importTax + salesTax;
    let finalPrice = price + totalTax;
    
    const roundToPrecision = (number) => {
        const strNumber = number.toString()
        if (Number(strNumber.slice(-1)) < 5) {
            return (Math.round(number * 100) / 100).toFixed(2)
        }
        return (Math.ceil(number * 100) / 100).toFixed(2)
    }
    
    return [roundToPrecision(finalPrice), roundToPrecision(totalTax)]
}

const calculateTotal = (list) => {
    const totalPrice = list.reduce((total, item) => total += parseFloat(item.price), 0);
    const totalTax = list.reduce((total, item) => total += parseFloat(item.tax), 0);
    return [totalPrice.toFixed(2), totalTax.toFixed(2)]
}

app.get('/fetchCatalogue', cors(), async function(req, res) {
    try {
        const result = await axios.get("https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/sales-tax-problem-test.json");
        res.json(result?.data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
});

app.post('/addToCart', cors(), function(req, res) {
    const price = req.body.price;
    const basicTax = req.body.basicTax;
    const isImported = req.body.imported;

    const [total, tax] = calculatePrice(price, basicTax, isImported);
    res.json({total: total, tax: tax});
});

app.post('/removeItem', cors(), function(req, res) {
    const items = req.body.items;
    const id = req.body.id;
    const filtered = items.filter(item => item.id !== id);
    res.json({filtered: filtered});
});

app.post('/getReceipt', cors(), function(req, res) {
    const items = req.body.items;
    const [price, tax] = calculateTotal(items);
    res.json({price: price, tax: tax});
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}/`);
})

