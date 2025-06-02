import {NavLink} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Каталог продуктов</h1>
            <NavLink to="/products">
                <h2>Перейти в каталог</h2>
            </NavLink>
        </>
    );
}
