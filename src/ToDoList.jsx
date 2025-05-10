import {Button} from 'primereact/button';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import getProducts from "./Products.jsx";

export default function ToDoList() {
    // todo Реализовать Pager
    return (
        <div>
            <div className="card">
                <DataTable stripedRows selectionMode="single" value={getProducts()} tableStyle={{minWidth: '50rem'}}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    )
}