import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './ToDoList.jsx'
import ToDoList from "./ToDoList.jsx";

export function App() {
    return (
    <>
        <h1>Список задач</h1>

        <ToDoList/>
    </>
  )
}

