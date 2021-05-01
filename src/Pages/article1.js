import React,  {useState, useEffect } from 'react';
import ArticleContent, { Paragraph } from '../Components/Article';

function ArticleOne () {

    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (header === ""){
            setHeader("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
        }
        if (content === ""){
            setContent("Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem.")
        }
    }, [header, content]); 

    return (
        <ArticleContent header={header} content={content}/>
    )
}

export default ArticleOne;