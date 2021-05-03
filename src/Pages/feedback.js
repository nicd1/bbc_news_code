import React,  {useState, useEffect } from 'react';
import ArticleContent from '../Components/Article';

function Feedback(){
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (header === ""){
            setHeader("Feedback")
        }
        if (content === ""){
            setContent("How would you rate these articles?")
        }
    }, [header, content]); 

    return (
        <>
       <h1>{header}</h1>
       <h2>{content}</h2>
       </>
    )
}

export default Feedback;