import React, { useState, useEffect } from 'react';
import { getArticleByNumber } from '../../ArticleService';
import { Header, Paragraph, List, Image } from '../Article/index.jsx'
import { ArticleWrapper } from '../Wrapper';

function ArticleContent ({ articleNum }){

  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticles(){
      await getArticleByNumber(articleNum).then(d => {
        console.log(d);
        setArticle(d);
    })
    }
    fetchArticles();
}, [articleNum]);

  return (
    <div>
      {article.body ?
      <ArticleWrapper>
          {article.body.map((item, i) => {
            
            switch(item.type) {
              case "paragraph":
                return (<Paragraph key={i}>{item.model.text}</Paragraph>) 
              case "image":
                return(<Image key={i} src={item.model.url} />)

              case "heading":
                return (<Header key={i}>{item.model.text}</Header>)

              case "list":
                if (item.model.type === "unordered") {
                  return(<List>{item.model.items.map((item,i) => {
                    return (<li key={i}>{item}</li>)
                  })}</List>)
                }
                break
              default:

            }
            
            return (<Paragraph key={i}>{item.type}: {item.model.text}</Paragraph>) 
          })}
      </ArticleWrapper>
       : <span>Loading...</span>     
      }
      </div>
  );
}

export default ArticleContent; 