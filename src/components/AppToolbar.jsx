import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import {appStore} from "../models/AppStore.ts";
import {Toolbar} from "primereact/toolbar";
import MainMenuSideBar from "./MainMenuSideBar.jsx";

/**
 * Главная панель команд приложения. Отображается везде, кроме Home-страницы.
 */
export function AppToolbar() {
    const [mainMenuSideBarVisible, setMainMenuSideBarVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const startContent = (
        <React.Fragment>
            <Button icon="pi pi-bars" className="mr-2" onClick={() => setMainMenuSideBarVisible(true)}/>
            <Button icon="pi pi-home" className="mr-2" onClick={() => navigate('/')}/>
        </React.Fragment>
    );
    const endContent = (
        <React.Fragment>
            <Button icon="pi pi-sync" className="mr-2" onClick={() => appStore.generateOrders()}/>
        </React.Fragment>
    );

    return (
        <>
            {location.pathname !== '/' && <Toolbar start={startContent} end={endContent}/>}
            <MainMenuSideBar visible={mainMenuSideBarVisible}
                             onVisibleChange={(value) => setMainMenuSideBarVisible(value)}/>
        </>
    );
}