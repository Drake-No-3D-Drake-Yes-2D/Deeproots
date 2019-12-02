import React from 'react';
import { useState, useEffect } from 'react';

import "./General.css";
import DefaultPage from './generic/DefaultPage';
import ReactMarkdown from 'react-markdown';
import { getContent } from '../api';


export default function About() {

    const [content, setContent] = useState('');

    useEffect(() => {
        getContent('about', setContent)
    }, [setContent]);

    return (
        <DefaultPage>
            <h2>About</h2>
            <ReactMarkdown source={content} />
        </DefaultPage>
    );
}
