import { plainToInstance } from "class-transformer";
import { validate } from 'class-validator';
import "reflect-metadata";

import { Product } from './product.model';


const products = [{title: 'A Carpet', price: 29.99}, {title: 'A Book', price: 12.99}];

const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('[1;32m Validation Errors![0m');
        console.log('[1;31m ---------- ' + errors + '[0m');
    } else {
        console.log(newProd.getInformation());
    }
});

//const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}