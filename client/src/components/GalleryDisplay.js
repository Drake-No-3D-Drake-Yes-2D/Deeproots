import React from 'react'
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from "react-router-dom";

import "./General.css";
import { getDataThen } from '../api';
import DefaultPage from './generic/DefaultPage';

function ArtImage({ image_url, title }) {
    return (
        <img style={{ maxWidth: "100%", maxHeight: "100%", margin: "0.5em" }} src={image_url} alt={title} />
    );
}

function ArtCard({ image_url, title, category, _id }) {
    return (
        <div style={{ margin: "1em 0", background: "", padding: "2em" }} id={`id_${_id}`}>
            <ArtImage image_url={image_url} title={title} />
            <Link to={{ pathname: `/Art/${_id}`, category: category }} >More Info & Purchase Options</Link>
        </div >
    );
}

function ArtList({ art, category }) {
    const activeArt = art.filter(x => x.active);
    return activeArt.map(x =>
        <ArtCard {...x} category={category} key={art._id} />
    );
}

export default function GalleryDisplay(props) {
    const [gallery, setGallery] = useState('');
    let { category } = useParams();

    useEffect(() => {
        getDataThen(`gallery/${category}`, setGallery, () => {
            if (props.location.hash) {
                let element = document.querySelector(props.location.hash);
                if (element) {
                    element.scrollIntoView()
                }
            }
        });
    }, [category, setGallery]);

    return (
        <DefaultPage>
            <h1>{gallery.title || ""}</h1>
            <ReactMarkdown source={gallery.content || ""} />
            <ArtList art={gallery.art || []} category={gallery.category || ""} />
        </DefaultPage>
    );
}