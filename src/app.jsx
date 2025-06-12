import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './pages/Products.jsx'
import './components/MainMenuSideBar.jsx'
import {Route, Routes} from "react-router-dom";
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.tsx";
import {AppToolbar} from "./components/AppToolbar.jsx";

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

export function App() {
    return (
        <div className="App">
            <AppToolbar/>
            {createRoutes()}
        </div>
    );
}

