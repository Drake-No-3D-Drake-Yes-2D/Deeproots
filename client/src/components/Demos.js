import React from 'react';
import { useState, useEffect } from 'react';

import "./General.css";
import DefaultPage from './generic/DefaultPage';
import ReactMarkdown from 'react-markdown';
import { getContent } from '../api';


export default function Demos() {

    const [content, setContent] = useState('');

    useEffect(() => {
        getContent('demos', setContent)
    }, [setContent]);

    return (
        <DefaultPage>
            <ReactMarkdown source={content} />
        </DefaultPage>
    );
}