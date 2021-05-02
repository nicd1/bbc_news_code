import React from 'react';
import {MainWrapper, ContentWrapper} from './Components/Wrapper';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import getAllArticles from './GetReq';
// import { getArticleOne, getArticleTwo, getArticleThree, getArticleFour, getArticleFive } from './GetReq';
import Pagination from './Components/Pagination';
import ArticleOne from './Pages/article1';
import ArticleTwo from './Pages/article2';
import ArticleThree from './Pages/article3';
import ArticleFour from './Pages/article4';
import ArticleFive from './Pages/article5';

function App() {
  getAllArticles();
  return (
      <MainWrapper>
        <ContentWrapper>
          <Switch>
            <Route path='/article1'><ArticleOne content={'test'}/></Route>
            <Route path='/article2'><ArticleTwo content={'test'}/></Route>
            <Route path='/article3'><ArticleThree content={'test'}/></Route>
            <Route path='/article4'><ArticleFour content={'test'}/></Route>
            <Route path='/article5'><ArticleFive content={'test'}/></Route>
          </Switch>
          <Redirect to="/article1" />
        </ContentWrapper>
        <Pagination />
      </MainWrapper>
  );
}

export default App;
