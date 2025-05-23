import React, { useState, useEffect, useRef } from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {InputTextarea} from "primereact/inputtextarea";
import {RadioButton} from "primereact/radiobutton";
import {InputNumber} from "primereact/inputnumber";
import {Dialog} from "primereact/dialog";
import {Rating} from "primereact/rating";
import {getSeverity} from "./utils.js";
import {Tag} from "primereact/tag";

export default function ToDoListEdit({task, onHide, onSave}) {

    const [showDialog, setShowDialog] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [product, setProduct] = useState(task);

    const hideDialog = () => {
        setSubmitted(false);
        setShowDialog(false); onHide();
    };

    function isValid(product){
        return product.name.trim();
    }

    const saveDialog = () => {
        setSubmitted(true);

        if (isValid(product)) {
            setShowDialog(false);
            onSave(product);
        }
    };

    //region Обработка ввода
    const onCategoryChange = (e) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };
    //endregion

    const dialogFooter = (
        <>
            <Button label="Сохранить" icon="pi pi-check" onClick={saveDialog} />
            <Button label="Отменить" icon="pi pi-times" outlined onClick={hideDialog} />
        </>
    );

    return (
        <>
            <Dialog visible={showDialog} style={{ width: '32rem' }}
                    breakpoints={{ '960px': '75vw', '641px': '90vw' }}
                    header="Сведения о продукте" modal className="p-fluid" footer={dialogFooter}
                    onHide={hideDialog}>

                {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                                       alt={product.image} className="product-image block m-auto pb-3" />}

                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Название
                    </label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Требуется имя.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Описание
                    </label>
                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>

                <div className="field">
                    <label className="mb-3 font-bold">Категория</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                            <label htmlFor="category1">Аксессуары</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                            <label htmlFor="category2">Одежда</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                            <label htmlFor="category3">Электроника</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                            <label htmlFor="category4">Здоровье</label>
                        </div>
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price" className="font-bold">
                            Цена
                        </label>
                        <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity" className="font-bold">
                            Количество
                        </label>
                        <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="rating" className="font-bold">
                            Рейтинг
                        </label>
                        <Rating id="rating" value={product.rating} onChange={(e) => onInputNumberChange(e, 'rating')} cancel={false} />
                    </div>
                    <div className="field col">
                        <label htmlFor="inventoryStatus" className="font-bold">
                            Наличие
                        </label>
                        <div>
                            <Tag id="inventoryStatus" value={product.inventoryStatus} severity={getSeverity(product)}/>
                        </div>
                    </div>
                </div>

            </Dialog>
        </>
    )
}
