import {Button} from 'primereact/button';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import getProducts from "./Products.jsx";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import {useRef, useState} from "react";
import {Toolbar} from "primereact/toolbar";

export default function ToDoList() {

    const [globalFilter, setGlobalFilter] = useState(null);


    const headerLayout = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h3 className="m-0">Управление задачами</h3>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Поиск..." />
            </IconField>
        </div>
    );

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Добавить" icon="pi pi-plus" severity="success" /*onClick={openNew}*/ />
                <Button label="Удалить" icon="pi pi-trash" severity="danger" /*onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length}*/ />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Экспорт" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    //region Экспорт данных из таблицы
    const dt = useRef(null);
    const exportCSV = () => {
        dt.current.exportCSV();
    };
    //endregion

    // Собственно разметка таблицы
    return (
        <div>
            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} stripedRows selectionMode="single" paginator rows={10}
                           paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                           currentPageReportTemplate="с {first} по {last} из {totalRecords}"
                           value={getProducts()} tableStyle={{minWidth: '50rem'}} header={headerLayout} globalFilter={globalFilter}>
                    <Column field="code" sortable header="Code"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column field="category" sortable header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    )
}