import {NavLink} from "react-router-dom";
import Back from "/src/assets/products.jpg"

export default function Home() {

    const backgroundBlockStyle = {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100vw",
            height: "100vh",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            backgroundImage: "url(/src/assets/products.jpg)"
    }

    const titleBlockStyle = {
            width: "40vw",
            height: "15vh",
            border: "2px solid silver",
            borderRadius: "10px",
            background: "white"
        }

    return (
        <div style={backgroundBlockStyle}>
            <div style={titleBlockStyle}>
                <h1 class="m-0">Каталог продуктов</h1>
                <NavLink to="/products">
                    <h2>Перейти в каталог</h2>
                </NavLink>
            </div>
        </div>
    )
}
