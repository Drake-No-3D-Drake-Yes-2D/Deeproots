import React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import "./General.css";
import { getContent, getData } from '../api';
import DefaultPage from './generic/DefaultPage';

// show descrption, link to full gallery
function GalleryCategory({ category, title, description }) {
    return (
        <div className="contentHolder" >
            <div className="chInnerBorder">
            <h2>{title}</h2>
            <ReactMarkdown source={description} />
            <Link to={`/gallery/${category}`}>
                <button style ={{border:"3px solid #00000089"}}>
                See This Gallery
                </button>
            </Link>
            </div>
        </div>
    );
}

function CategoriesList(props) {
    return props.categories.map(x =>
        <GalleryCategory {...x} />
    );
}


// list of gallery categories
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
                <ReactMarkdown style={{color:"#654321"}} source={header} />
                <CategoriesList categories={categories} />
            </DefaultPage>
        </div>
    );
}