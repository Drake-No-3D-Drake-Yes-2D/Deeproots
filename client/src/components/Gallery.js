import React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import "./General.css";
import { getContent, getData } from '../api';
import DefaultPage from './generic/DefaultPage';

function GalleryCategory({ category, title, description }) {
    return (
        <div style={{ margin: "2em 0", background: "white", padding: "2em", border: "0.5em solid black" }} >
            <h2>{title}</h2>
            <ReactMarkdown source={description} />
            <Link to={`/gallery/${category}`}>See This Gallery</Link>
        </div>
    );
}

function CategoriesList(props) {
    return props.categories.map(x =>
        <GalleryCategory {...x} />
    );
}

export default function Gallery() {
    const [header, setHeader] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getContent('gallery', setHeader);
        getData('gallery', setCategories);
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