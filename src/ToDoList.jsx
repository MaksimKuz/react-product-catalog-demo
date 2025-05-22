import {Button} from 'primereact/button';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useRef, useState} from "react";
import {Toolbar} from "primereact/toolbar";
import ToDoListDeleteConfirmation from "./ToDoListDeleteConfirmation.jsx";
import {Toast} from "primereact/toast";
import ToDoListEdit from "./ToDoListEdit.js";
import {ProductService} from "./ProductsService.js";
import {Rating} from "primereact/rating";
import {Tag} from "primereact/tag";

export default function ToDoList() {

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [products, setProducts] = useState(null);
    const [product, setProduct] = useState(null);
    const [showEditProductDialog, setShowEditProductDialog] = useState(false);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

    //region Панели команд
    const [globalFilter, setGlobalFilter] = useState(null);
    const headerLayout = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h3 className="m-0">Управление продуктами</h3>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Поиск..." />
            </IconField>
        </div>
    );

    //region Шаблоны фрагментов таблицы
    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Добавить" icon="pi pi-plus" severity="success" onClick={newProduct} />
                <Button label="Удалить" icon="pi pi-trash" severity="danger"
                        onClick={()=> deleteProductsDialog(selectedProducts)} disabled={!selectedProducts || selectedProducts.length === 0}  />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Экспорт" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined severity="secondary" className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteProductsDialog(rowData)} />
            </React.Fragment>
        );
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
    };
    //endregion

    let newTask = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: 'Accessories',
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };


   const toast = useRef(null);

    //region Создание элементов
    const addNewProduct = (product) => {
        setShowEditProductDialog(false);

        let _products = [...products];
        let _product = { ...product };

        if (product.id) {
            const index = findIndexById(product.id);

            _products[index] = _product;
            toast.current.show({ severity: 'success', summary: 'Успешно', detail: 'Задача изменена', life: 3000 });
        } else {
            _product.id = createId();
            _product.image = 'product-placeholder.svg';
            _products.push(_product);
            toast.current.show({ severity: 'success', summary: 'Успешно', detail: 'Задача создана', life: 3000 });
        }

        setProducts(_products);
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };
    //endregion

    function newProduct() {
        setProduct(newTask);
        setShowEditProductDialog(true);
    }

    function editProduct(product) {
        setProduct(product);
        setShowEditProductDialog(true);
    }

    //region Удаление элементов
    const [showDeleteProductsDialog, setShowDeleteProductsDialog] = useState(false);
    // состояние содержит удаляемые продукты
    const [deleteProducts, setDeleteProducts] = useState(null);

    const deleteSelectedProducts = () => {
        let _products;
        if (Array.isArray(deleteProducts))
            _products = products.filter((val) => !deleteProducts.includes(val));
        else
            _products = products.filter((val) => val.id !== deleteProducts.id);

        setProducts(_products);
        setShowDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Успех', detail: 'Продукт был удален', life: 3000 });
    };

    function deleteProductsDialog(p) {
        setDeleteProducts(p);
        setShowDeleteProductsDialog(true);
    }

    //endregion

    //region Экспорт данных из таблицы
    const dt = useRef(null);
    const exportCSV = () => {
        dt.current.exportCSV();
    };
    //endregion

    // Собственно разметка таблицы
    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} dataKey="id"  selectionMode="single" selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                           paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                           currentPageReportTemplate="Отображаются продукты с {first} по {last} из {totalRecords}"
                value={products} header={headerLayout} globalFilter={globalFilter}
                           emptyMessage="Нет доступных данных.">
                    <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                    <Column field="name" header="Название" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="image" header="Изображение" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Цена" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field="category" header="Категория" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="rating" header="Рейтинг" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="inventoryStatus" header="Наличие" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            {showEditProductDialog && <ToDoListEdit task={product}
                onHide={() => setShowEditProductDialog(false)} onSave={(product)=> addNewProduct(product)}/>}

            {showDeleteProductsDialog && <ToDoListDeleteConfirmation
                title="Вы уверены, что хотите удалить выбранную задачу?"
                onHide={()=> setShowDeleteProductsDialog(false)} onConfirm={()=> deleteSelectedProducts()}/>}
        </div>
    )
}