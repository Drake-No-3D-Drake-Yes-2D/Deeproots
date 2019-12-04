import React from 'react';
import { useState, useEffect } from 'react';

import "./General.css";
import DefaultPage from './generic/DefaultPage';
import ReactMarkdown from 'react-markdown';
import { getContent } from '../api';


export default function Colabs() {

    const [content, setContent] = useState('');

    useEffect(() => {
        getContent('collabs', setContent)
    }, [setContent]);

    return (
        <DefaultPage>
            <div className="contentHolder" >
                <div className="chInnerBorder">
                    <h1 style={{color:"#654321"}}>Collaborations</h1>
                    <ReactMarkdown source={content} />
                </div>
            </div>
        </DefaultPage>
    );
}
