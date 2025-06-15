import {expect, test} from 'vitest';
import AppStore from "../models/AppStore.ts";
import {newDate} from "../utils/dateUtils.ts";

function генерацияЗаказов(appStore: AppStore) {
    appStore.добавитьПродукт('Gold Phone Case', 'Акссесуары', 100);
    appStore.добавитьПродукт('Green T-Shirt', 'Одежда', 200);

    appStore.сгенерироватьЗаказ(newDate(2025, 2, 2), 'Gold Phone Case', 1);
    appStore.сгенерироватьЗаказ(newDate(2025, 2, 2), 'Green T-Shirt', 2);
}

test('Генерация заказов', async () => {
    let appStore = new AppStore();
    генерацияЗаказов(appStore);

    expect(appStore.orders.length).toBe(2);
    expect(appStore.orders[0].product).toBeDefined();

    expect(appStore.итоговаяВыручка).toBe((100 + 2*200)/10);
    }
)

test('самыеПродаваемыеПродукты', async () => {
    let appStore = new AppStore();
    генерацияЗаказов(appStore);

    let выручка = (100 + 2*200)/10;
    expect(appStore.итоговаяВыручка).toBe(выручка);
    let продукты = appStore.самыеПродаваемыеПродукты(2025, 2);

    expect(продукты[0].product).toBe(appStore.products[1]);
    expect(продукты[0].percent).toBe(appStore.orders[1].income/выручка*100);

    expect(продукты[1].product).toBe(appStore.products[0]);
    expect(продукты[1].percent).toBe(appStore.orders[0].income/выручка*100);
    }
)

