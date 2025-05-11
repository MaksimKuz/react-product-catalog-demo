import {Button} from 'primereact/button';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import getProducts from "./Products.jsx";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import {useState} from "react";

export default function ToDoList() {

    const [globalFilter, setGlobalFilter] = useState(null);

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h3 className="m-0">Управление задачами</h3>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Поиск..." />
            </IconField>
        </div>
    );

    return (
        <div>
            <div className="card">
                <DataTable stripedRows selectionMode="single" paginator rows={10}
                           paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                           currentPageReportTemplate="с {first} по {last} из {totalRecords}"
                           value={getProducts()} tableStyle={{minWidth: '50rem'}} header={header} globalFilter={globalFilter}>
                    <Column field="code" sortable header="Code"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column field="category" sortable header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    )
}