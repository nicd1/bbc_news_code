import React, { useState, useEffect } from 'react';
import { getArticleByNumber } from '../../ArticleService';
import { Header, SubHeader, Paragraph, List, Image } from '../Article/index.jsx'
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
      <>
        <Header>{article.title}</Header>
          <ArticleWrapper>
          {article.body.map((item, i) => {
            
            switch(item.type) {
              case "paragraph":
                return (<Paragraph key={i}>{item.model.text}</Paragraph>) 
              case "image":
                return(<Image key={i} src={item.model.url} />)

              case "heading":
                return (<SubHeader key={i}>{item.model.text}</SubHeader>)

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
      </>
       : <span>Loading...</span>     
      }
      </div>
  );
}

export default ArticleContent; 