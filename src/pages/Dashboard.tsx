import { useEffect, useRef, useState } from 'react';
import {ProductService} from "../services/ProductsService";
import {Card} from "primereact/card";
import {appStore} from "../models/AppStore.ts";
import {observer} from "mobx-react";
import SalesChart from "../components/SalesChart.tsx";
import MostSaledProducts from "../components/MostSaledProducts.jsx";

const Dashboard = observer(() => {
    const [products, setProducts] = useState<Demo.Product[]>([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    return (
        <div className="grid mt-2">
            <div className="col-3">
                <Card style={{borderRadius:"15px", textAlign:"left"}} className="mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Заказов</span>
                            <div className="text-900 font-medium text-xl">{appStore.orders.length}</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round"
                             style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi pi-shopping-cart text-blue-500 text-xl"/>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">{appStore.newOrders} новых </span>
                    <span className="text-500">за эту неделю</span>
                </Card>
            </div>

            <div className="col-3">
                <Card style={{borderRadius:"15px", textAlign:"left"}} className="mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Выручка</span>
                            <div className="text-900 font-medium text-xl">{new Intl.NumberFormat("ru").format(appStore.ordersIncome)} руб</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round"
                             style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi pi-dollar text-orange-500 text-xl"/>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">%{appStore.incomeIncrement}+ </span>
                    <span className="text-500">с последней недели</span>
                </Card>
            </div>

            <div className="col-3">
                <Card style={{borderRadius:"15px", textAlign:"left"}} className="mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Клиентов</span>
                            <div className="text-900 font-medium text-xl">28441</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                             style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi pi-user text-cyan-500 text-xl"/>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">520 </span>
                    <span className="text-500">зарегистрировано новых</span>
                </Card>
            </div>

            <div className="col-3">
                <Card style={{borderRadius:"15px", textAlign:"left"}} className="mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Комментариев</span>
                            <div className="text-900 font-medium text-xl">152 Непрочитано</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round"
                             style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi pi-comment text-purple-500 text-xl"/>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">85 </span>
                    <span className="text-500">отвечено</span>
                </Card>
            </div>

            <div className="col-6" >
                <Card style={{borderRadius: "15px"}}>
                    <h3>Самые продаваемые продукты</h3>
                    <MostSaledProducts/>
            </Card>
            </div>

            <div className="col-6" >
                <Card style={{borderRadius: "15px"}}>
                    <h3>Продажи по месяцам</h3>
                    <SalesChart/>
                </Card>
            </div>
        </div>
    );
});

export default Dashboard;
