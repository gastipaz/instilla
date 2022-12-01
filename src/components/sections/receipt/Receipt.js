import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ElementWrapper, Heading, Subtitle } from '../../styled-elements/ProjectElements'
import './Receipt.css'

const Receipt = ({ inCart }) => {

    const [total, setTotal] = useState(null)

    useEffect(() => {
        async function postData() {
            const result = await axios.post('http://localhost:5000/getReceipt', {items: inCart});
            console.log(result.data);
            setTotal(result.data)
        }
        postData();
    },[inCart])

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
                    <Subtitle>${total?.price}</Subtitle>
                    <label>${total?.tax}</label>
                </ElementWrapper>
            </div>
        </section>
    )
}

export default Receipt