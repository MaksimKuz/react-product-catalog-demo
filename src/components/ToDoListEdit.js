import React, { useState, useEffect, useRef } from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {InputTextarea} from "primereact/inputtextarea";
import {RadioButton} from "primereact/radiobutton";
import {InputNumber} from "primereact/inputnumber";
import {Dialog} from "primereact/dialog";
import {Rating} from "primereact/rating";
import {getImageSrc, getSeverity, getStatusFromIndex, getStatusIndex, statusItems} from "../utils.js";
import {Tag} from "primereact/tag";
import {OverlayPanel} from "primereact/overlaypanel";
import {SelectButton} from "primereact/selectbutton";
import ImageSelector from "./ImageSelector.jsx";
import productPng from "/src/assets/product.png";

export default function ToDoListEdit({task, onHide, onSave}) {

    const [showDialog, setShowDialog] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [product, setProduct] = useState(task);

    const hideDialog = () => {
        setSubmitted(false);
        setShowDialog(false); onHide();
    };

    function isValid(product){
        return isValidName(product) && isValidPrice(product) && isValidImage(product);
    }

    function isValidName(product){
        return product.name !== null && product.name.trim();
    }

    function isValidPrice(product){
        return product.price > 0;
    }

    function isValidImage(product){
        return product.image !== null;
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

    const onStatusChange = (e) => {
        let _product = { ...product };

        _product['inventoryStatus'] = getStatusFromIndex(e.value);
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

    const imageSelect = image => {
        let _product = { ...product };
        _product[`image`] = image;
        setProduct(_product);
    };

    //endregion

    const dialogFooter = (
        <>
            <Button label="Сохранить" icon="pi pi-check" onClick={saveDialog} />
            <Button label="Отменить" icon="pi pi-times" outlined onClick={hideDialog} />
        </>
    );

    const selectButtonTemplate = (option) => {
        let status = getStatusFromIndex(option.value);
        return <Tag value={status} severity={getSeverity(status)}/>;
    }

    const imageOverlayPanel = useRef(null);

    return (
        <>
            <Dialog visible={showDialog} style={{ width: '68rem' }}
                    breakpoints={{ '960px': '75vw', '641px': '90vw' }}
                    header="Сведения о продукте" modal className="p-fluid" footer={dialogFooter}
                    onHide={hideDialog}>

                <div className="grid nested-grid">

                    <div className="col-8">
                        <div className="field">
                            <label htmlFor="name" className="font-bold">
                                Название
                            </label>
                            <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')}
                                       required autoFocus className={classNames({'p-invalid': submitted && !isValidName(product) })}/>
                            {submitted && !isValidName(product) && <small className="p-error">Требуется название продукта</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="description" className="font-bold">
                                Описание
                            </label>
                            <InputTextarea id="description" value={product.description}
                                           onChange={(e) => onInputChange(e, 'description')} required rows={3}
                                           cols={20}/>
                        </div>

                        <div className="field">
                            <label className="mb-3 font-bold">Категория</label>
                            <div className="formgrid grid">
                                <div className="field-radiobutton col-3">
                                    <RadioButton inputId="category1" name="category" value="Аксессуары"
                                                 onChange={onCategoryChange}
                                                 checked={product.category === 'Аксессуары'}/>
                                    <label htmlFor="category1">Аксессуары</label>
                                </div>
                                <div className="field-radiobutton col-3">
                                    <RadioButton inputId="category2" name="category" value="Одежда"
                                                 onChange={onCategoryChange} checked={product.category === 'Одежда'}/>
                                    <label htmlFor="category2">Одежда</label>
                                </div>
                                <div className="field-radiobutton col-3">
                                    <RadioButton inputId="category3" name="category" value="Электроника"
                                                 onChange={onCategoryChange}
                                                 checked={product.category === 'Электроника'}/>
                                    <label htmlFor="category3">Электроника</label>
                                </div>
                                <div className="field-radiobutton col-3">
                                    <RadioButton inputId="category4" name="category" value="Здоровье"
                                                 onChange={onCategoryChange} checked={product.category === 'Здоровье'}/>
                                    <label htmlFor="category4">Здоровье</label>
                                </div>
                            </div>
                        </div>

                        <div className="formgrid grid">
                            <div className="field col-6">
                                <label htmlFor="price" className="font-bold">
                                    Цена
                                </label>
                                <InputNumber id="price" value={product.price}
                                             onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency"
                                             currency="USD" locale="en-US" className={classNames({'p-invalid': submitted && !isValidPrice(product) })}/>
                                {submitted && !isValidPrice(product) && <small className="p-error">Требуется значение цены</small>}
                            </div>
                            <div className="field col-6">
                                <label htmlFor="quantity" className="font-bold">
                                    Количество
                                </label>
                                <InputNumber id="quantity" value={product.quantity}
                                             onValueChange={(e) => onInputNumberChange(e, 'quantity')}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        {product.image && <img src={getImageSrc(product.image)}
                                               className="product-image block m-auto pb-3" onClick={(e) => imageOverlayPanel.current.toggle(e)} />}
                        {!product.image && <img src={productPng} onClick={(e) => imageOverlayPanel.current.toggle(e)} />}
                        {submitted && !isValidImage(product) && <small className="p-error">Требуется указать изображение</small>}
                        <OverlayPanel ref={imageOverlayPanel} >
                            <ImageSelector product={product} onImageSelect={imageSelect}/>
                        </OverlayPanel>

                        <div className="field">
                            <label htmlFor="inventoryStatus" className="font-bold">
                                Наличие
                            </label>
                            <div>
                                <SelectButton id="inventoryStatus" value={getStatusIndex(product.inventoryStatus)}
                                              itemTemplate={selectButtonTemplate}
                                              onChange={onStatusChange} optionLabel="name" options={statusItems()}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="rating" className="font-bold">
                                Рейтинг
                            </label>
                            <Rating id="rating" value={product.rating}
                                    onChange={(e) => onInputNumberChange(e, 'rating')}
                                    cancel={false}/>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

