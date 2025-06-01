
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function FilterSideBar() {
    const [visibleRight, setVisibleRight] = useState(true);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center">
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
            </div>

            <Sidebar visible={visibleRight} position="right" dismissable={false} modal={false} onHide={() => setVisibleRight(false)}>
                <h2 className="bg-primary text-center">Фильтрация</h2>
                <p>
                    <h3 className="surface-200">по категориям</h3>
                    <li className="text-left">Все</li>
                    <li className="text-left">Аксессуары</li>
                    <li className="text-left">Одежда</li>
                    <li className="text-left">Электроника</li>
                    <li className="text-left">Здоровье</li>

                    <h3 className="surface-200">по наличию</h3>
                    <li className="text-left">Все</li>
                    <li className="text-left">Только в наличии</li>
                </p>
            </Sidebar>

        </div>
    )
}
