import {observable, makeObservable, computed, action} from 'mobx';
import Product from "./Product.ts";
import Order from "./Order.ts";
import {endOfMonthDate, startOfMonthDate} from "../dateUtils.ts";
import {isHoliday, isWorkDay} from "../dateUtils.ts";

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
            let product = new Product('Space T-Shirt', 'Clothing');
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

    private заказыЗаПериод(начальнаяДата: Date, конечнаяДата: Date, дополнительныйФильтр): Order[] {
        let start = начальнаяДата.getTime();
        let end = конечнаяДата.getTime();
        return this.orders.filter(o => o.date.getTime() >= start && o.date.getTime() < end + 1 && дополнительныйФильтр(o.date));
    }

    private выручкаЗаМесяц(год: number, месяц: number, дополнительныйФильтр): number {
        let orders = this.заказыЗаПериод(startOfMonthDate(год, месяц), endOfMonthDate(год, месяц), дополнительныйФильтр);
        let sum = 0;
        orders.forEach(o => sum+= o.income)
        return sum;
    }

    public выручкаЗаМесяцПоРабочимДням(год: number, месяц: number): number {
        return this.выручкаЗаМесяц(год, месяц, дата => isWorkDay(дата));
    }

    public выручкаЗаМесяцПоВыходнымДням(год: number, месяц: number): number {
        return this.выручкаЗаМесяц(год, месяц, дата => isHoliday(дата));
    }

    public продажиЗаМесяцПоВыходнымДням(год: number, месяц: number): number {
        return this.продажиЗаМесяц(год, месяц, дата => isHoliday(дата));
    }

}

export const appStore = new AppStore();

