import { useState } from 'preact/hooks'
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'
import './MyApp.jsx'
// @ts-ignore
import MyComponent from "./MyApp";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + Preact</h1>
      <div class="card">
        <Button icon="pi pi-plus" className="mr-2" label="Increment" onClick={() => setCount((count) => count + 1)}></Button>
        <InputText value={count.toString()} />
      </div>
      <MyComponent/>
    </>
  )
}
