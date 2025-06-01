import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './components/ProductList.jsx'
import './components/MainMenuSideBar.jsx'
import ProductList from "./components/ProductList.jsx";
import Menu from "./components/MainMenuSideBar.jsx";
import MainMenuSideBar from "./components/MainMenuSideBar.jsx";
import FilterSideBar from "./components/FilterSideBar.js";

export function App() {
    return (
        <>
            <div className="grid">
                <div className="col-10">
                    <h1>Каталог наличия товаров</h1>
                    <ProductList/>
                </div>
                <div className="col-2">
                    <div style={"margin:5px"}>
                        <MainMenuSideBar/>
                    </div>
                </div>
                <FilterSideBar/>
            </div>

        </>
    )
}

