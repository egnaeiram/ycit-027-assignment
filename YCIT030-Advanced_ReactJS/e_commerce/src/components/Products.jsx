import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190408-running-shoes-1555559788.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*'},
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://bhphotovideo.com/images/images2500x2500/apple_mgn63ll_a_13_3_macbook_air_notebook_1431279.jpg'},
];

const Products = () => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
         ))}
        </Grid>
    
    </main>
    );
}

export default Products;