import React, { useState, useEffect } from 'react';
import {MainWrapper, ContentWrapper} from './Components/Wrapper';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import './App.css';
import getAllArticles from './GetReq'
import Pagination from './Components/Pagination';
import ArticleOne from './Pages/article1';
import ArticleTwo from './Pages/article2';
import ArticleThree from './Pages/article3';
import ArticleFour from './Pages/article4';
import ArticleFive from './Pages/article5';
import Feedback from './Pages/feedback';

function App() {

  const [articles, setArticles] = useState();
  const [locationPath, setLocationPath] = useState(false);

  function LocationSet(){
    const location = useLocation();
    console.log(location.pathname);
    if (location.pathname === '/article5'){
      setLocationPath(true);
    }
  }

  useEffect(() => {
    if (locationPath){
      LocationSet();
    }
  });
  useEffect(() => {
      let allArticles = [];
      async function FetchArticles(){
        if (articles === undefined){
          allArticles = await getAllArticles();
        setArticles(allArticles);
      }
    }
    FetchArticles();
  }, [articles]);

  console.log(articles);

  return (
      <MainWrapper>
        <ContentWrapper>
          <Switch>
            <Route path='/article1'><ArticleOne content={''} /></Route>
            <Route path='/article2'><ArticleTwo content={''} /></Route>
            <Route path='/article3'><ArticleThree content={''} /></Route>
            <Route path='/article4'><ArticleFour content={''} /></Route>
            <Route path='/article5'><ArticleFive content={''} /></Route>
            <Route path='/feedback>'><Feedback /></Route>
          </Switch>
          <Redirect to="/article1" />
        </ContentWrapper>
        <Pagination location={locationPath}/>
      </MainWrapper>
  );
}

export default App;
