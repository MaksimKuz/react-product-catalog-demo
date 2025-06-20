import React, {useRef, useState} from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import {useNavigate} from "react-router-dom";


export default function MainMenuSideBar({visible, onVisibleChange}) {

    return <div className="flex justify-content-center">
        <Sidebar
            visible={visible} onHide={() => onVisibleChange(false)}
            content={({ closeIconRef, hide }) => MenuContent(closeIconRef, hide)}
        ></Sidebar>
    </div>
}

function MenuContent(closeIconRef, hide) {
    const navigate = useNavigate();
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    const headerFragment =
        <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
            <span className="inline-flex align-items-center gap-2">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g mask="url(#mask0_2642_713)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                                    fill="var(--primary-color)"
                                />
                            </g>
                        </svg>
                        <span className="font-semibold text-2xl text-primary">Your Logo</span>
                    </span>
            <span>
                <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)}
                        icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
            </span>
        </div>;

    const footerFragment =
        <div className="mt-auto">
            <hr className="mb-3 mx-3 border-top-1 border-none surface-border"/>
            <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                        shape="circle"/>
                <span className="font-bold">Пользователь</span>
            </a>
        </div>;

    return (
        <div className="min-h-screen flex relative lg:static surface-ground">
            <div id="app-sidebar-2"
                 className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                 style={{width: '280px'}}>
                <div className="flex flex-column h-full">

                    {headerFragment}

                    <div className="overflow-y-auto">
                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={btnRef1} selector="@next" enterFromClassName="hidden"
                                            enterActiveClassName="slidedown" leaveToClassName="hidden"
                                            leaveActiveClassName="slideup">
                                    <div ref={btnRef1}
                                         className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                        <span className="font-medium">ИЗБРАННОЕ</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple/>
                                    </div>
                                </StyleClass>

                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium" onClick={() => {
                                                navigate("/dashboard"); hide();
                                            }}>Панель управления</span>
                                            <Ripple/>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-database mr-2"></i>
                                            <span className="font-medium" onClick={() => {
                                                navigate("/products"); hide();
                                            }}>Каталог продуктов</span>
                                            <Ripple/>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">Messages</span>
                                            <span
                                                className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                style={{minWidth: '1.5rem', height: '1.5rem'}}>
                                                            3
                                            </span>
                                            <Ripple/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Calendar</span>
                                            <Ripple/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple/>
                                        </a>
                                    </li>

                                </ul>
                            </li>
                        </ul>

                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={btnRef4} selector="@next" enterFromClassName="hidden"
                                            enterActiveClassName="slidedown" leaveToClassName="hidden"
                                            leaveActiveClassName="slideup">
                                    <div ref={btnRef4}
                                         className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                        <span className="font-medium">APPLICATION</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple/>
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-folder mr-2"></i>
                                            <span className="font-medium">Projects</span>
                                            <Ripple/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-bar mr-2"></i>
                                            <span className="font-medium">Performance</span>
                                            <Ripple/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple/>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {footerFragment}

                </div>
            </div>
        </div>
    )
}