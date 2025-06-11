import {makeObservable} from 'mobx';
import Product from "./Product.ts";

export default class Order {
    id: string;
    product: Product;
    date: Date;
    quantity: Number;

    constructor(id: string, product: Product, date: Date, quantity: Number) {
        this.id = id;
        this.product = product;
        this.date = date;
        this.quantity = quantity;

        makeObservable(this, {
        })
    };
}




