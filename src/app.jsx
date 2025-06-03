import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './components/ProductList.jsx'
import './components/MainMenuSideBar.jsx'
import {Route, Routes, NavLink, useParams, Outlet, useNavigate} from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import Menu from "./components/MainMenuSideBar.jsx";
import MainMenuSideBar from "./components/MainMenuSideBar.jsx";
import FilterSideBar from "./components/FilterSideBar.js";
import Home from "./home.jsx";
import React, {useState} from "react";
import {Button} from "primereact/button";
import {Toolbar} from "primereact/toolbar";

function createRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<AppMain />}>
            </Route>
        </Routes>
    )
}

export function App() {
    return (
        <div className="App">
            {createRoutes()}
        </div>
    );
}

function AppMain() {

    const [filterPanelVisible, setFilterPanelVisible] = useState(true);
    const [mainMenuSideBarVisible, setMainMenuSideBarVisible] = useState(false);

    const HeaderToolbar = () => {
        const navigate = useNavigate()

        const startContent = (
            <React.Fragment>
                <Button icon="pi pi-bars" className="mr-2" onClick={() => setMainMenuSideBarVisible(true)}/>
                <Button icon="pi pi-home" className="mr-2" onClick={() => navigate('/')}/>
            </React.Fragment>
        );

        const centerContent = (
            <h2>Каталог товаров</h2>
        );

        const endContent = (
            <React.Fragment>
                <Button icon="pi pi-filter" onClick={() => setFilterPanelVisible(true)}/>
            </React.Fragment>
        );

        return (
            <div className="card">
                <Toolbar start={startContent} center={centerContent} end={endContent} />
            </div>
        );
    };

    return (
        <>
            <HeaderToolbar/>
            <ProductList/>
            <MainMenuSideBar visible={mainMenuSideBarVisible} onVisibleChange={(value) =>setMainMenuSideBarVisible(value)}/>
            <FilterSideBar visible={filterPanelVisible} onVisibleChange={(value) =>setFilterPanelVisible(value)}/>
        </>
    )
}

