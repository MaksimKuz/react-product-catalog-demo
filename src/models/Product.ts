import {makeObservable, observable} from 'mobx';

export default class Product {
    id?: string;
    code?: string;
    name: string;
    description?: string;
    image?: string;
    price?: number;
    date?:	Date;
    category: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;

    constructor(name: string, category: string) {
        this.name = name;
        this.category = category;

        makeObservable(this, {
            name: observable,
        })
    };
}




