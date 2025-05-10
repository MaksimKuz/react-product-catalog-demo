import { render } from 'preact'
// @ts-ignore
import { App } from './app.jsx'
import { PrimeReactProvider } from "primereact/api";
import './index.css'

render(
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>, document.getElementById('app')!)
