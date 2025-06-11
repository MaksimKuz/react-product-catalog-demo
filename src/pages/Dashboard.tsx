import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Menu } from 'primereact/menu';
import { useEffect, useRef, useState } from 'react';
import { ChartData, ChartOptions } from 'chart.js';
import {ProductService} from "../services/ProductsService";
import {Card} from "primereact/card";
import {appStore} from "../models/AppStore.ts";
import {observer} from "mobx-react";

const lineData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'По рабочим дням',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            backgroundColor: '#cac482',
            borderColor: '#726161',
            tension: 0.4
        },
        {
            label: 'По выходным',
            data: [28, 48, 40, 19, 86, 27],
            fill: false,
            backgroundColor: '#d68b8b',
            borderColor: '#a34646',
            tension: 0.4
        }
    ]
};

const lineData2: ChartData = {
    labels: ['Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [
        {
            label: 'По рабочим дням',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            backgroundColor: '#cac482',
            borderColor: '#726161',
            tension: 0.4
        },
        {
            label: 'По выходным',
            data: [28, 48, 40, 19, 86, 27],
            fill: false,
            backgroundColor: '#d68b8b',
            borderColor: '#a34646',
            tension: 0.4
        }
    ]
};

const Dashboard = observer(() => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});

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
                <div className="flex justify-content-between align-items-center mb-5">
                    <h3>Самые продаваемые продукты</h3>
                </div>
                <ul className="list-none p-0 m-0">
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                            <div className="mt-1 text-600">Clothing</div>
                        </div>
                        <div className="mt-2 md:mt-0 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className="bg-orange-500 h-full" style={{width: '50%'}}/>
                            </div>
                            <span className="text-orange-500 ml-3 font-medium">%50</span>
                        </div>
                    </li>
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                            <div className="mt-1 text-600">Accessories</div>
                        </div>
                        <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className="bg-cyan-500 h-full" style={{width: '16%'}}/>
                            </div>
                            <span className="text-cyan-500 ml-3 font-medium">%16</span>
                        </div>
                    </li>
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                            <div className="mt-1 text-600">Accessories</div>
                        </div>
                        <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className="bg-cyan-500 h-full" style={{width: '16%'}}/>
                            </div>
                            <span className="text-cyan-500 ml-3 font-medium">%16</span>
                        </div>
                    </li>
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                            <div className="mt-1 text-600">Accessories</div>
                        </div>
                        <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className="bg-pink-500 h-full" style={{width: '67%'}}/>
                            </div>
                            <span className="text-pink-500 ml-3 font-medium">%67</span>
                        </div>
                    </li>
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                            <div className="mt-1 text-600">Office</div>
                        </div>
                        <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className="bg-green-500 h-full" style={{width: '35%'}}/>
                            </div>
                            <span className="text-green-500 ml-3 font-medium">%35</span>
                        </div>
                    </li>
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                            <div className="mt-1 text-600">Accessories</div>
                        </div>
                        <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className="bg-purple-500 h-full" style={{width: '75%'}}/>
                            </div>
                            <span className="text-purple-500 ml-3 font-medium">%75</span>
                        </div>
                    </li>
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                            <div className="mt-1 text-600">Clothing</div>
                        </div>
                        <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className="bg-teal-500 h-full" style={{width: '40%'}}/>
                            </div>
                            <span className="text-teal-500 ml-3 font-medium">%40</span>
                        </div>
                    </li>
                </ul>
            </Card>
            </div>

            <div className="col-6" >
                <Card style={{borderRadius: "15px"}}>
                <h3>Продажи по месяцам</h3>
                <Chart type="line" data={lineData} options={lineOptions}/>
                <Chart className="mt-2" type="line" data={lineData2} options={lineOptions}/>
                </Card>
            </div>
        </div>
    );
});

export default Dashboard;
