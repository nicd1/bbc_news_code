import React from 'react';
import {MainWrapper, ContentWrapper} from './Components/Wrapper';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pagination from './Components/Pagination';
import ArticleOne from './Pages/article1';
import ArticleTwo from './Pages/article2';
import ArticleThree from './Pages/article3';
import ArticleFour from './Pages/article4';
import ArticleFive from './Pages/article5';
import Feedback from './Pages/feedback';

function App() {

  return (
      <MainWrapper>
        <ContentWrapper>
          <Switch>
          <Route path='/article1'><ArticleOne articleNum={1}/></Route>
            <Route path='/article2'><ArticleTwo articleNum={2}/></Route>
            <Route path='/article3'><ArticleThree articleNum={3}/></Route>
            <Route path='/article4'><ArticleFour articleNum={4}/></Route>
            <Route path='/article5'><ArticleFive articleNum={5}/></Route>
            <Route path='/feedback'><Feedback /></Route>
          </Switch>
          <Redirect to="/article1" />
        </ContentWrapper>
        <Pagination />
      </MainWrapper>
  );
}

export default App;
