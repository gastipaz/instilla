import React from 'react'
import { ElementWrapper, Heading, Subtitle } from '../../styled-elements/ProjectElements'
import './Receipt.css'

const Receipt = ({ inCart }) => {

    const calculateTotal = (list) => {
        const totalPrice = list.reduce((total, item) => total += parseFloat(item.price), 0);
        const totalTax = list.reduce((total, item) => total += parseFloat(item.tax), 0);
        return [totalPrice.toFixed(2), totalTax.toFixed(2)]
    }
    const [total, tax] = calculateTotal(inCart);

    return (
        <section className='receipt-container'>
            <ElementWrapper id='receipt-title'>
                <Heading>Receipt</Heading>
            </ElementWrapper>
            <div className='description wrapper'>
                <ElementWrapper>
                    <Subtitle>Total amount</Subtitle>
                    <label>Including taxes</label>
                </ElementWrapper>
                <ElementWrapper className='total wrapper'>
                    <Subtitle>${total}</Subtitle>
                    <label>${tax}</label>
                </ElementWrapper>
            </div>
        </section>
    )
}

export default Receipt