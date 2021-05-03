import React from 'react';
import { MainWrapper, ContentWrapper, PaginationWrapper } from './Components/Wrapper';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pagination from './Components/Pagination';
import ArticleContent from './Components/Article'
import Feedback from './Feedback';

function App() {

  return (
      <MainWrapper>
        <ContentWrapper>
          <Switch>
          <Route path='/article1'><ArticleContent articleNum={1}/></Route>
            <Route path='/article2'><ArticleContent articleNum={2}/></Route>
            <Route path='/article3'><ArticleContent articleNum={3}/></Route>
            <Route path='/article4'><ArticleContent articleNum={4}/></Route>
            <Route path='/article5'><ArticleContent articleNum={5}/></Route>
            <Route path='/feedback'><Feedback /></Route>
          </Switch>
          <Redirect to="/article1" />
        </ContentWrapper>
        <PaginationWrapper>
          <Pagination />
        </PaginationWrapper>
      </MainWrapper>
  );
}

export default App;
