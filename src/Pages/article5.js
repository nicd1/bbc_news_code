import React, { useState, useEffect } from 'react';
import ArticleContent from '../Components/Article';

function ArticleFive () {
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (header === ""){
            setHeader("Test Header 5")
        }
        if (content === ""){
            setContent("Test Content 5")
        }
    }, [header, content]); 

    return (
        <ArticleContent header={header} content={content}/>
    )
}

export default ArticleFive;