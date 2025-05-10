import {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {FloatLabel} from "primereact/floatlabel";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";

export default function NewToDoForm() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const footerContent = (
        <div>
            <Button label="Добавить" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus/>
            <Button label="Отменить" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text"/>
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="Добавить" icon="pi pi-external-link" onClick={() => setVisible(true)}/>
            <Dialog header="Новая задача" footer={footerContent} visible={visible} style={{width: '50vw'}}
                    onHide={() => {if (!visible) return; setVisible(false);}} >

                <p className="card m-0">
                    <FloatLabel  >
                        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} style={{width: '100%', margin: 30}} />
                        <label htmlFor="username">Название</label>
                    </FloatLabel>
                    <FloatLabel  >
                        <InputTextarea id="username1" value={value} onChange={(e) => setValue(e.target.value)} style={{width: '100%', margin: 30}} />
                        <label htmlFor="username1">Название</label>
                    </FloatLabel>
                </p>
            </Dialog>
        </div>
    )
}

