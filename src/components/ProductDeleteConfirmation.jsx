import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {useState} from "react";

export  default function ProductDeleteConfirmation({title, onConfirm, onHide}){

    const [showDialog, setShowDialog] = useState(true);

    const hideDialog = () => {
        setShowDialog(false); onHide()
    };

    const deleteProductsDialogFooter = (
        <>
            <Button label="Да" icon="pi pi-check" severity="danger" onClick={onConfirm} />
            <Button label="Нет" icon="pi pi-times" outlined onClick={hideDialog} />
        </>
    );
    return(
        <Dialog visible={showDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }}
                header="Подтверждение" modal footer={deleteProductsDialogFooter} onHide={hideDialog}>
        <div className="confirmation-content">
            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
            <span>{title}</span>
        </div>
    </Dialog>)
}
