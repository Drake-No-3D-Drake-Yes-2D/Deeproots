import React from 'react';
import { useState, useEffect } from 'react';

import "./General.css";
import DefaultPage from './generic/DefaultPage';
import ReactMarkdown from 'react-markdown';
import { getContent } from '../api';


export default function CLC() {

    const [content, setContent] = useState('');

    useEffect(() => {
        getContent('clc', setContent)
    }, [setContent]);

    return (
        <DefaultPage>
            <div className="contentHolder" >
                <div className="chInnerBorder">
                    <h1 style={{color:"#654321"}}>Creative Life Coaching</h1>
                    <ReactMarkdown source={content} />
                </div>
            </div>
        </DefaultPage>
    );
}
