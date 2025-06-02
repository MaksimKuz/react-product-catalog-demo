import { render } from 'preact'
// @ts-ignore
import { App } from './app.jsx'
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

render(
    <PrimeReactProvider>
        <Router>
            <App/>
        </Router>
    </PrimeReactProvider>, document.getElementById('app')!)

