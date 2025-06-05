import {NavLink, useNavigate} from "react-router-dom";
import Back from "/src/assets/products.jpg"
import {Button} from "primereact/button";

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

    const navigate = useNavigate();

    return (

        <div className="grid grid-nogutter surface-0 text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">Каталог продуктов</span>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <Button label="Перейти в каталог" type="button" className="mr-3 p-button-raised"
                    onClick={() => {navigate("/products")}}/>
                    <Button label="Покинуть сайт" type="button" className="p-button-outlined"/>
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src="/src/assets/products.jpg" alt="hero-1" className="md:ml-auto block md:h-full"
                     style={{clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)'}}/>
            </div>
        </div>
    )
}
