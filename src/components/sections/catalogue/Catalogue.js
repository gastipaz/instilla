import React from 'react'
import Card from './Card'
import { Grid, Heading, Section } from './../../styled-elements/ProjectElements'
import { useFetch } from './../../hooks/APIHooks'
import Loader from './../../Loader'
import './Catalogue.css'

const Catalogue = ({setInCart, inCart}) => {

    const [products, isLoading] = useFetch("/fetchCatalogue");

    if (isLoading) return <Loader/>

    return (
        <Section>
            {products ? 
                (<>
                    <Heading>Products Catalogue</Heading>
                    <Grid>
                    {products.map((product, index) =>    
                        <Card key={index} item={product} id={index} setInCart={setInCart} inCart={inCart}/>
                    )}
                    </Grid> 
                </>) 
                : <Heading>Something went wrong</Heading>
            }
        </Section>
    )
}

export default Catalogue