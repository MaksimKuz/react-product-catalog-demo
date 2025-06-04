
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import {ProductService} from "../ProductsService.js";
import {getImageSrc} from "../utils.js";

export default function ImageSelector({product, onImageSelect}) {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        ProductService.getProducts("", "").then((data) => {
            setImages(data);
            // установка в галлерее текущего изображения совпадающего с текущим
            // TODO это почему-то не работает (не работает даже просто установка в константу), работает только иници-ция в useState
            // setActiveIndex(data.indexOf((p) => p.id === product.id));
        });
    }, []);

    const itemTemplate = (item) => {
        return <img src={getImageSrc(item.image)} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={getImageSrc(item.image)} alt={item.alt} style={{ height: '80px' }} />
    }

    function onItemChange(event) {
        setActiveIndex(event.index);
        onImageSelect(images[event.index].image);
    }

    return (
        <div className="card">
            <Galleria value={images} activeIndex={activeIndex} responsiveOptions={responsiveOptions} numVisible={4} style={{ maxWidth: '400px' }}
                      item={itemTemplate} thumbnail={thumbnailTemplate} onItemChange={onItemChange} />
        </div>
    )
}
