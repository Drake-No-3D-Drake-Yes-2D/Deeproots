import React from 'react';
import { useState, useEffect } from 'react';

import "./General.css";
import DefaultPage from './generic/DefaultPage';
import ReactMarkdown from 'react-markdown';
import { getContent } from '../api';


export default function Contacts() {

    const [content, setContent] = useState('');

    useEffect(() => {
        getContent('contacts', setContent)
    }, [setContent]);

    return (
        <DefaultPage>
            <h1>Contacts</h1>
            <ReactMarkdown source={content} />
        </DefaultPage>
    );
}
