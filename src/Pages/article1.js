import React, { useState, useEffect } from 'react';
import ArticleContent from '../Components/Article';
import { getArticleByNumber } from '../ArticleService';

function ArticleOne ({ articleNum }) {
 
    const [article, setArticle] = useState({});

    useEffect(() => {
        async function fetchArticle(){
        await getArticleByNumber(articleNum).then(d => {
                setArticle(d);
            })     
    }
    fetchArticle();
    }, [])

    return (
        <ArticleContent article={article}/>
    )
}

export default ArticleOne;