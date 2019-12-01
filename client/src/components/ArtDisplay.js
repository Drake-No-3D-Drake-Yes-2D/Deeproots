import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import "./General.css";
import { getContent, getData } from '../api';
import DefaultPage from './generic/DefaultPage';
import ReactMarkdown from 'react-markdown';

function ArtImage({ image_url, title }) {
    return (
        <img style={{ maxWidth: "100%", maxHeight: "100%", margin: "0.5em" }} src={image_url} alt={title} />
    );
}

function ArtPrices({ prices, has_original }) {
    const original_left = has_original && prices.filter(x => x.original && x.purchases.filter(y => y.active).length > 0).length === 0;
    const avaliablePrices = prices.filter(x => x.active && (original_left || !x.original));
    return (
        <div>
            {avaliablePrices.map(price => (
                <button style={{ margin: "0.25em" }}>{price.title} (${price.price})</button>
            ))}
        </div>
    );
}

export default function ArtDisplay(props) {
    const [art, setArt] = useState('');
    const [info, setInfo] = useState('');
    let { artId } = useParams();

    useEffect(() => {
        getData(`art/${artId}`, setArt);
        getContent('artInfo', setInfo);
    }, [artId, setArt, setInfo]);

    let backLocation = (props.location && props.location.category) ?
        `${props.location.category}/#id_${art._id || ""}` : ''

    return (
        <DefaultPage>
            <h1>{art.title || ""}</h1>
            <h2>Artist: {art.artist || ""}</h2>
            <ArtImage image_url={art.image_url || ""} title={art.title || ""} />
            <ReactMarkdown source={info} />
            <ArtPrices prices={art.prices || []} has_original={art.has_original || false} />
            <Link to={`/gallery/${backLocation}`}>Back</Link>
        </DefaultPage>
    );
}