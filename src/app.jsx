import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './components/ProductList.jsx'
import './components/MainMenuSideBar.jsx'
import {Route, Routes, NavLink, useParams, Outlet} from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import Menu from "./components/MainMenuSideBar.jsx";
import MainMenuSideBar from "./components/MainMenuSideBar.jsx";
import FilterSideBar from "./components/FilterSideBar.js";
import Home from "./home.jsx";

function createRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<AppMain />}>
                <Route path=":filter" element={<AppMain />} />
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
    return (
        <>
            <div>
                <div>
                    <h1>Каталог товаров</h1>
                    <ProductList/>
                </div>
                <div>
                    <MainMenuSideBar/>
                </div>
                <FilterSideBar/>
            </div>
        </>
    )
}

