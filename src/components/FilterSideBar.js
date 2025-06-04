
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import {useNavigate} from "react-router-dom";
import {RadioButton} from "primereact/radiobutton";

const filterHeaderStyles = "bg-primary text-center";
const filterSubHeaderStyles = "surface-200 pl-3";

export default function FilterSideBar({visible, onVisibleChange}) {

    const navigate = useNavigate();

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        };
    };

    const [categoryFilter, setCategoryFilter] = useState("");

    const CategoryFilterOption = ({value, label}) =>(
        <div className="flex flex-row gap-2 align-items-center">
            <RadioButton inputId={value+'Id'} name="category" value={value} onChange={(e) => {
                setCategoryFilter(e.value); onUpdateURL("category", e.value);
            }}
                         checked={categoryFilter === value}/>
            <label htmlFor={value+'Id'} className="ml-2">{label}</label>
        </div>
    )

    const [instockFilter, setInstockFilter] = useState("");

    const InstockFilterOption = ({value, label}) =>(
        <div className="flex flex-row gap-2 align-items-center">
            <RadioButton inputId={value+'Id'} name="instock" value={value} onChange={(e) => {
                setInstockFilter(e.value); onUpdateURL("instock", e.value);
            }}
                         checked={instockFilter === value}/>
            <label htmlFor={value+'Id'} className="ml-2">{label}</label>
        </div>
    )

    function onUpdateURL(filterKind, value){
        switch (filterKind){
            case "category":
                navigate("/products?category="+value);
                break;

            case "instock":
                navigate("/products?instock="+value);
                break;
        }
    }

    return (
        <div className="card">
            <Sidebar visible={visible} position="right" dismissable={false} modal={false} onHide={() => onVisibleChange(false)}>
                <h2 className={filterHeaderStyles}>
                    Фильтрация
                </h2>
                <p>
                    <h3 className={filterSubHeaderStyles}>
                        по категориям
                    </h3>

                    <div className="flex flex-column gap-2">
                        <CategoryFilterOption value="" label="Все категории"/>
                        <CategoryFilterOption value="Аксессуары" label="Аксессуары"/>
                        <CategoryFilterOption value="Одежда" label="Одежда"/>
                        <CategoryFilterOption value="Электроника" label="Электроника"/>
                        <CategoryFilterOption value="Здоровье" label="Здоровье"/>
                    </div>

                    <h3 className={filterSubHeaderStyles}>
                        по наличию
                    </h3>

                    <div className="flex flex-column gap-2">
                        <InstockFilterOption value="" label="Все"/>
                        <InstockFilterOption value="true" label="Только в наличии"/>
                    </div>
                </p>
            </Sidebar>
        </div>
    )
}
