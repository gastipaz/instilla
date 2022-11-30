import React from 'react'
import { Button, Heading, Section } from '../../styled-elements/ProjectElements'
import {FaTrashAlt} from 'react-icons/fa'
import './Table.css'

const Table = ({inCart, setShowReceipt, showReceipt, setInCart}) => {

    const receiptButtonLabel = !showReceipt ? "GENERATE RECEIPT" : "HIDE RECEIPT";

    const handleDelete = (id) => {
        const filtered = inCart.filter(item => item.id !== id);
        setInCart(filtered);
    }

  return (
    <Section>
        <Heading>Selected Products</Heading>
        <table className='table'>
            <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th className="small">IMPORTED</th>
                    <th className="small">PRICE</th>
                    <th className="small">TAX</th>
                    <th style={{width:"50px"}}></th>
                </tr>
            </thead>
            <tbody>
                {inCart.map(item => 
                    <tr key={item.id}>
                        <td id='product-name'>{item.product}</td>
                        <td>{item.imported}</td>
                        <td>${item.price}</td>
                        <td>${item.tax}</td>
                        <td><FaTrashAlt className='trash-icon' onClick={()=>handleDelete(item.id)}/></td>
                    </tr>
                )}
            </tbody>
        </table>
        <Button id='receipt-btn' onClick={()=>setShowReceipt(!showReceipt)}>{receiptButtonLabel}</Button>
    </Section>
  )
}

export default Table