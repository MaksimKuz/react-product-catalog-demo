import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './pages/Products.jsx'
import './components/MainMenuSideBar.jsx'
import {Route, Routes, NavLink, useParams, Outlet, useNavigate, useLocation} from "react-router-dom";
import Products from "./pages/Products.jsx";
import Menu from "./components/MainMenuSideBar.jsx";
import MainMenuSideBar from "./components/MainMenuSideBar.jsx";
import Home from "./pages/Home.jsx";
import React, {useState} from "react";
import {Button} from "primereact/button";
import {Toolbar} from "primereact/toolbar";
import Dashboard from "./pages/Dashboard.tsx";

/**
 * Определение маршрутов приложения.
 * */
function createRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />}>
            </Route>
        </Routes>
    )
}

/**
 * Главная панель команд приложения. Отображается везде, кроме Home-страницы.
 */
function AppToolbar() {
    const [mainMenuSideBarVisible, setMainMenuSideBarVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const startContent = (
        <React.Fragment>
            <Button icon="pi pi-bars" className="mr-2" onClick={() => setMainMenuSideBarVisible(true)}/>
            <Button icon="pi pi-home" className="mr-2" onClick={() => navigate('/')}/>
        </React.Fragment>
    );
    return (
        <>
            {location.pathname !== '/' && <Toolbar start={startContent}/>}
            <MainMenuSideBar visible={mainMenuSideBarVisible} onVisibleChange={(value) =>setMainMenuSideBarVisible(value)}/>
        </>
    );
}

export function App() {
    return (
        <div className="App">
            <AppToolbar/>
            {createRoutes()}
        </div>
    );
}

