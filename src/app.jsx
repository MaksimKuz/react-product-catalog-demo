import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './ToDoList.jsx'
import ToDoList from "./ToDoList.jsx";
import {Button} from "primereact/button";
import NewToDoForm from "./NewToDoForm.jsx";
import ProductsDemo from "./Prs.jsx";

const
    buttonStyle = {margin: 5};

export function App() {
    return (
    <>
        <h1>Список задач</h1>

        <ToDoList/>
        <ProductsDemo/>
    </>
  )
}

