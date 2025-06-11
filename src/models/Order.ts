import {computed, makeObservable} from 'mobx';
import Product from "./Product.ts";

export default class Order {
    id: string;
    product: Product;
    date: Date;
    quantity: number;

    constructor(id: string, product: Product, date: Date, quantity: number) {
        this.id = id;
        this.product = product;
        this.date = date;
        this.quantity = quantity;

        makeObservable(this, {
            cost: computed
        })
    };

    /**
     * Полная стоимость заказа.
     * */
    get cost(): number {
        return this.quantity * this.product.price;
    }

    /**
     * Полная выручка по заказу.
     * */
    get income(): number {
        return this.cost / 10;
    }
}




