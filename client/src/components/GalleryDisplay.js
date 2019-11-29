import React from 'react'
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import {
    useParams
} from "react-router-dom";

import "./General.css";
import api from '../api';

function ArtCard(props) {
    return (<div>"lol"</div>);
}

function ArtList(props) {
    return props.art.map(x =>
        <ArtCard {...x} />
    );
}

async function getHeader(category, setHeader) {
    setHeader((await api.get(`content/galleryCategory${category}`)).data);
}

async function getArt(category, setArt) {
    setArt((await api.get(`gallery/categories/${category}`)).data);
}

export default function GalleryDisplay() {
    const [header, setHeader] = useState('');
    const [art, setArt] = useState([]);
    let { category } = useParams();

    useEffect(() => {
        getHeader(category, setHeader);
        getArt(category, setArt);
    }, [category, setHeader, setArt]);

    return (
        <div>
            <ReactMarkdown source={header} />
            <ArtList art={art} />
        </div>
    );
}