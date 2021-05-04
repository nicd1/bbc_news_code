import React,  {useState, useEffect } from 'react';
import { Header, Paragraph } from './Components/Article/index.jsx';
import { FeedbackForm } from './Components/FeedbackForm';

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
       <Header>{header}</Header>
       <Paragraph>{content}</Paragraph>
       <FeedbackForm />
       <label>I enjoyed these articles</label>
       <button>i enjoyed these articles</button>
       <label>I didn't enjoy these articles</label>
       <button></button>
       </>
    )
}

export default Feedback;