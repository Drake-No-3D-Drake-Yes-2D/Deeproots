import React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

import "./General.css";
import api from '../api';

function GalleryCategory(props) {
    return (<div>{props.title}: {props.content}</div>);
}

function CategoriesList(props) {
    return props.categories.map(x =>
        <GalleryCategory {...x} />
    );
}

async function getHeader(setHeader) {
    setHeader((await api.get('content/galleryHeader')).data);
}

async function getCategories(setCategories) {

    const categoriesList = (await api.get('gallery/categories')).data;
    const categories = await Promise.all(categoriesList.map(
        async x => ({
            title: x,
            content: (await api.get(`content/galleryCategory${x}`)).data
        })
    ))
    setCategories(categories);
}

export default function Gallery() {
    const [header, setHeader] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getHeader(setHeader);
        getCategories(setCategories);
    }, [setHeader, setCategories]);

    return (
        <div>
            <ReactMarkdown source={header} />
            <CategoriesList categories={categories} />
        </div>
    );
}