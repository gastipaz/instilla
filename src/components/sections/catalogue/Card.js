import React from 'react'
import { CardContainer, CardImage, CardImageWrapper, CardText, CardTitle } from '../../styled-elements/CardElements'
import { Button, ElementWrapper } from '../../styled-elements/ProjectElements'
import { FaTag } from 'react-icons/fa'
import './Catalogue.css'

const Card = ({ item, id, setInCart }) => {

    const exemptCategories = ["books", "food", "medical-products"];
    let imported = document.getElementById(`imported${id}`)?.checked;
    let price = parseFloat(item.price);
    let isExempt = exemptCategories.includes(item.category);
    let basicTax = isExempt ? 0 : 10;
    let category = item.category.replace("-", " ")

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

    function handleChange(event) {
        imported = event.target.checked;
    }

    function addToCart() {
        let itemID = id.toString() + new Date().getTime().toString();
        let [total, tax] = calculatePrice(price, basicTax, imported);
        const newProduct = { id:itemID, product: item.name, imported: imported ? "Yes" : "No", price: total, tax: tax }
        setInCart(prevProducts => [...prevProducts, newProduct])
    }

    return (
        <CardContainer>
            <CardImageWrapper>
                <CardImage src={item.image} alt='card-product' />
                <div id="tag-icon">
                    <FaTag />
                    <label>{category}</label>
                </div>
            </CardImageWrapper>
            <ElementWrapper>
                <CardTitle>{item.name}</CardTitle>
                <CardText>${price.toFixed(2)}</CardText>
                <div id="checkbox">
                    <input type="checkbox" id={`imported${id}`} onChange={(event) => handleChange(event)} />
                    <label htmlFor={`imported${id}`}>Apply import duty</label>
                </div>
            </ElementWrapper>
            <ElementWrapper>
                <Button onClick={() => addToCart()}>add to cart</Button>
            </ElementWrapper>
        </CardContainer>
    )
}

export default Card