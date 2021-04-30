import React from 'react';
import logo from '../../logo.svg';
import Header from '../Article/index.jsx'
import {ArticleWrapper} from '../Wrapper';

function ArticleContent ({ header, content }){

  return (
    <>
      <Header>{header}</Header>
      <ArticleWrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{content}</p>
      </ArticleWrapper>
      </>
  )
}

export default ArticleContent;