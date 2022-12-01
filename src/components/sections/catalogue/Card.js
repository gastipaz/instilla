import React from 'react'
import axios from 'axios'
import { CardContainer, CardImage, CardImageWrapper, CardText, CardTitle } from '../../styled-elements/CardElements'
import { Button, ElementWrapper } from '../../styled-elements/ProjectElements'
import { FaTag } from 'react-icons/fa'
import {BsFillCartCheckFill} from 'react-icons/bs'
import './Catalogue.css'

const Card = ({ item, id, setInCart, inCart }) => {

    const exemptCategories = ["books", "food", "medical-products"];
    let imported = document.getElementById(`imported${id}`)?.checked;
    let price = parseFloat(item.price);
    let isExempt = exemptCategories.includes(item.category);
    let basicTax = isExempt ? 0 : 10;
    let category = item.category.replace("-", " ")

    function handleChange(event) {
        imported = event.target.checked;
    }

    function displayCartIcon() {
        return (
            inCart.includes(entry => entry.product === item.name) &&
            <div className='cart-icon'>
                <BsFillCartCheckFill/>
            </div>
        )
    }

    async function addToCart(id) {
        let itemID = id.toString() + new Date().getTime().toString();
        const {data} = await axios.post("/addToCart", {price: price, basicTax:basicTax, imported: imported})
        const newProduct = { id:itemID, product: item.name, imported: imported ? "Yes" : "No", price: data?.total, tax: data?.tax }
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
                {displayCartIcon()}
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
                <Button onClick={() => addToCart(id)}>add to cart</Button>
            </ElementWrapper>
        </CardContainer>
    )
}

export default Card