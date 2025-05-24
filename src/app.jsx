import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './components/ToDoList.jsx'
import ToDoList from "./components/ToDoList.jsx";

export function App() {
    return (
    <>
        <h1>Каталог наличия товаров</h1>
        <ToDoList/>
    </>
  )
}

