import React, { useState, useEffect } from 'react';
import ArticleContent from '../Components/Article';

function ArticleFour () {
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (header === ""){
            setHeader("Test Header 4")
        }
        if (content === ""){
            setContent("Test Content 4")
        }
    }, [header, content]); 

    return (
        <ArticleContent header={header} content={content}/>
    )
}

export default ArticleFour;