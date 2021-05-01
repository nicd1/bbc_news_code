import {MainWrapper, ContentWrapper} from './Components/Wrapper';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Pagination from './Components/Pagination';
import ArticleOne from './Pages/article1';
import ArticleTwo from './Pages/article2';
import ArticleThree from './Pages/article3';
import ArticleFour from './Pages/article4';
import ArticleFive from './Pages/article5';

function App() {
  return (
      <MainWrapper>
        <ContentWrapper>
          <Switch>
            <Route path='/article1'><ArticleOne /></Route>
            <Route path='/article2'><ArticleTwo /></Route>
            <Route path='/article3'><ArticleThree /></Route>
            <Route path='/article4'><ArticleFour /></Route>
            <Route path='/article5'><ArticleFive /></Route>
          </Switch>
          <Redirect to="/article1" />
        </ContentWrapper>
        <Pagination />
      </MainWrapper>
  );
}

export default App;
