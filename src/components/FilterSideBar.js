
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {NavLink, useParams} from "react-router-dom";

const filterHeaderStyles = "bg-primary text-center";
const filterSubHeaderStyles = "surface-200 pl-3";

export default function FilterSideBar({visible, onVisibleChange}) {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        };
    };

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
                    <li><NavLink style={navLinkStyles} to="/products/?category=">
                        Все категории
                    </NavLink></li>

                    <li><NavLink style={navLinkStyles} to="/products?category=Аксессуары">
                        Аксессуары
                    </NavLink></li>

                    <li><NavLink style={navLinkStyles} to="/products?category=Одежда">
                        Одежда
                    </NavLink></li>

                    <li><NavLink style={navLinkStyles} to="/products/?category=Электроника">
                        Электроника
                    </NavLink></li>

                    <li><NavLink style={navLinkStyles} to="/products/?category=Здоровье">
                        Здоровье
                    </NavLink></li>

                    <h3 className={filterSubHeaderStyles}>
                        по наличию
                    </h3>
                    <li><NavLink style={navLinkStyles} to="/products/?instock=">
                        Все
                    </NavLink></li>

                    <li><NavLink style={navLinkStyles} to="/products/?instock=true">
                        Только в наличии
                    </NavLink></li>
                </p>
            </Sidebar>

        </div>
    )
}
