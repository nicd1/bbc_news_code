import React,  {useState, useEffect } from 'react';
import ArticleContent, { Paragraph } from '../Components/Article';

function ArticleOne ({ content }) {
 
    const [header, setHeader] = useState("");
    const [articleContent, setArticleContent] = useState("");
    console.log(content, '____________JSONCONTENT');

    useEffect(() => {
        if (header === ""){
            setHeader("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
        }
        if (content === ""){
            setArticleContent("Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem.")
        }
    }, [header, content]); 

    return (
        <ArticleContent header={header} content={articleContent}/>
    )
}

export default ArticleOne;