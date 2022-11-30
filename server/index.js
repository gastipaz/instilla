import express from "express";
import cors from "cors";
import axios from "axios";
import path from "path";

const port = 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + "/public")))

app.get('/fetchCatalogue', cors(), async function(req, res) {
    try {
        const result = await axios.get("https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/sales-tax-problem-test.json");
        res.json(result.data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}/`);
})

