import React,  {useState, useEffect } from 'react';
import ArticleContent from '../Components/Article';
import { getArticleByNumber } from '../ArticleService';

function ArticleThree ({ articleNum }) {
 
    const [header, setHeader] = useState("");
    const [article, setArticle] = useState({});

    useEffect(() => {
        async function fetchArticle(){
        if (header === ""){
            setHeader(article.title)
        }       
        await getArticleByNumber(articleNum).then(d => {
            setArticle(d);
        })
    }
    fetchArticle();
    }, [])

    return (
        <ArticleContent header={header} article={article}/>
    )
}

export default ArticleThree;