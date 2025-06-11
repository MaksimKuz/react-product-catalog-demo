import {observable, makeObservable, computed, action} from 'mobx';
import Product from "./Product.ts";
import Order from "./Order.ts";

export default class AppStore {
    products: Product[] = [];
    orders: Order[] = [];

    constructor() {
        this.generateOrders();

        makeObservable(this, {
            products: observable,
            orders: observable,
            newOrders: computed,
            generateOrders: action
        });
    }

    public generateOrders() {
        for (let i = 0; i < 1234; i++) {
            let date = new Date();
            date.setDate(date.getDate() - i);
            let product = new Product();
            product.price = 1;
            this.orders.push(new Order(i.toString(), product, date, 1));
        }
    }

    /**
     * Возвращает количество новых заказов (за эту неделю).
     */
    get newOrders(): number {
        return 236;
    }

    /**
     * Возвращает полную выручку по заказам.
     */
    get ordersIncome(): number {
        let sum = 0;
        for (let order of this.orders) {
            sum += order.income
        }
        return sum;
    }

    /**
     * Возвращает увеличение выручи за последнюю неделю.
     */
    get incomeIncrement(): number {
        return 55;
    }

}

export const appStore = new AppStore();

