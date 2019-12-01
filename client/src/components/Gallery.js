import React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import "./General.css";
import api from '../api';
import DefaultPage from './generic/DefaultPage';

function GalleryCategory(props) {
    return (<div>{props.title}: {props.content}</div>);
}

function CategoriesList(props) {
    return props.categories.map(x =>
        <GalleryCategory {...x} />
    );
}

async function getHeader(setHeader) {
    setHeader((await api.get('content/gallery')).data);
}

async function getCategories(setCategories) {

    const categories = (await api.get('gallery')).data;
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
            <DefaultPage>
                <ReactMarkdown source={header} />
                <CategoriesList categories={categories} />
            </DefaultPage>
        </div>
    );
}