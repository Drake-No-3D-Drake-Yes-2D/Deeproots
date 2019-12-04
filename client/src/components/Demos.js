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
            <div className="contentHolder">
                <div className="chInnerBorder">
                    <ReactMarkdown style={{color:"#654321"}} source={content} />
                    <div className="video-container">
                        <iframe width="200 " height="200" src="https://www.youtube.com/embed/J6bY8rJ-e6A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>  
            </div>
        </DefaultPage>
    );
}
