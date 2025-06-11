import {observable, makeObservable, computed} from 'mobx';
import Product from "./Product.ts";
import Order from "./Order.ts";

export default class AppStore {
    products: Product[] = [];

    orders: Order[] = [];
    constructor() {
        this.generateOrdrs();

        makeObservable(this, {
            products: observable,
            orders: observable,
            newOrders: computed
        });
    }

    private generateOrdrs() {
        for (let i = 0; i < 1234; i++) {
            let date = new Date();
            date.setDate(date.getDate() - i);
            this.orders.push(new Order(i.toString(), new Product(), date, 1));
        }
    }

    /**
     * Возвращает количество новых заказов (за эту неделю).
     */
    get newOrders(): number {
        return 236;
    }

}

export const appStore = new AppStore();

