import {NavLink} from "react-router-dom";
import Back from "/src/assets/products.jpg"

export default function Home() {
    return (
        <div style="position: absolute;top: 0px;left: 0px;width:100vw;height:100vh;display: flex;flex-direction: column;justify-content: center;align-items: center;background-image: url(/src/assets/products.jpg)">
            <div style="width:40vw;height:15vh;border: 2px solid;border-radius: 10px;background:white;">
                <h1 class="m-0">Каталог продуктов</h1>
                <NavLink to="/products">
                    <h2>Перейти в каталог</h2>
                </NavLink></div>
            </div>
    );
}
