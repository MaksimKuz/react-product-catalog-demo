import {appStore} from "../models/AppStore.ts";

export const ProductService = {

    getProductsSmall() {
        return fetch('/src/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    },

    getProductsData() {
        return fetch('/src/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    },

    getProducts(category, instock) {
        return this.getProductsData().then(data => {
                let d = data;
                if (category !== "" && category !== null)
                    d = data.filter((d) => d.category === category);
                if (instock !== "" && instock !== null)
                    d = data.filter((d) => d.inventoryStatus !== "ОТСУТСТВУЕТ");
                appStore.products = d;
                return Promise.resolve(d);
            }
        );
    },

    loadProducts() {
        fetch('/src/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => appStore.products = d.data);
    },

};

