const
    //todo Models\toDoModel - исправить модель
    
    products =
        [
            {
                id: '1000',
                code: 'f230fh0g1',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
            id: '1002',
            code: 'f230fh0g2',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
            {
            id: '1003',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        }];

export default function getProducts() {
    // todo улучшить генерацию
    let pr = products;
   // for (let i = 0; i < 7; i++) pr = pr.concat(products);
    let j = 0;
    for (let p of pr) {
        p.id = (++j).toString();
    }
    return pr;
}
