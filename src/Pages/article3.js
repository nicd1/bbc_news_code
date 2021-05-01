import React, { useState, useEffect } from 'react';
import ArticleContent from '../Components/Article';

function ArticleThree () {
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (header === ""){
            setHeader("testHeader3")
        }
        if (content === ""){
            setContent("test content 3")
        }
    }, [header, content]); 

    return (
        <ArticleContent header={header} content={content}/>
    )
}

export default ArticleThree;