import {Button} from 'primereact/button';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import getProducts from "./Products.jsx";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import React, {useRef, useState} from "react";
import {Toolbar} from "primereact/toolbar";
import {Dialog} from "primereact/dialog";
import ToDoListDeleteConfirmation from "./ToDoListDeleteConfirmation.jsx";

export default function ToDoList() {

    const [selectedProducts, setSelectedProducts] = useState(null);

    //region Панели команд
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
                <Button label="Удалить" icon="pi pi-trash" severity="danger"
                        onClick={()=> setDeleteProductsDialog(true)} disabled={!selectedProducts || selectedProducts.length === 0}  />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Экспорт" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };
    //endregion

    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };
    const [products, setProducts] = useState(getProducts());
    const [product, setProduct] = useState(emptyProduct);

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => val !== selectedProducts);

        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
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

                <DataTable ref={dt} dataKey="id"  stripedRows selectionMode="single" selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                           paginator rows={10}
                           paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                           currentPageReportTemplate="с {first} по {last} из {totalRecords}"
                           value={products} tableStyle={{minWidth: '50rem'}} header={headerLayout} globalFilter={globalFilter}
                           emptyMessage="Нет доступных данных.">
                    <Column field="code" sortable header="Code"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column field="category" sortable header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            {deleteProductsDialog && <ToDoListDeleteConfirmation
                title="Вы уверены, что хотите удалить выбранную задачу?"
                onHide={()=> setDeleteProductsDialog(false)} onConfirm={()=> deleteSelectedProducts()}/>}
        </div>
    )
}