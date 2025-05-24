import React, { useState, useEffect, useRef } from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {InputTextarea} from "primereact/inputtextarea";
import {RadioButton} from "primereact/radiobutton";
import {InputNumber} from "primereact/inputnumber";
import {Dialog} from "primereact/dialog";
import {Rating} from "primereact/rating";
import {getSeverity, getStatusFromIndex, getStatusIndex, statusItems} from "../utils.js";
import {Tag} from "primereact/tag";
import {OverlayPanel} from "primereact/overlaypanel";
import {SelectButton} from "primereact/selectbutton";

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

    const op1 = useRef(null);

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
                                       required
                                       autoFocus className={classNames({'p-invalid': submitted && !product.name})}/>
                            {submitted && !product.name && <small className="p-error">Требуется имя.</small>}
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
                                             currency="USD" locale="en-US"/>
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
                                               alt={product.image} className="product-image block m-auto pb-3" onClick={(e) => op1.current.toggle(e)} />}
                        <OverlayPanel ref={op1}>
                            <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
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

