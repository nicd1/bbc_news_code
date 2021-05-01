import React, { useState, useEffect } from 'react';
import ArticleContent from '../Components/Article';

function ArticleTwo () {
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (header === ""){
            setHeader("Test Header 2")
        }
        if (content === ""){
            setContent("Test Content 2")
        }
    }, [header, content]); 

    return (
        <ArticleContent header={header} content={content}/>
    )
}

export default ArticleTwo;