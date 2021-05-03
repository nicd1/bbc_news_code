import React from 'react';
import logo from '../../logo.svg';
import { Header, Subheading, Paragraph, List, Image } from '../Article/index.jsx'
import { ArticleWrapper } from '../Wrapper';

function ArticleContent ({ article }){
  return (
    <div>
      {article.body ?
      <>
        <Header>{article.title}</Header>
        <Subheading></Subheading>
        <ArticleWrapper>
          <Image src={logo} className="App-logo" alt="logo" />
        </ArticleWrapper>
        <ol>
          {article.body.map((item, i) => { 
            console.log(item.model.text, '_______item model text');                       
            return (<li key={i}>{item.type}: {item.model.text}</li>) 
          })}
        </ol>
      </>
       : null     
      }
     
      </div>
  );
}

export default ArticleContent; 