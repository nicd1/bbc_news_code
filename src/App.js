import logo from './logo.svg';
import {MainWrapper, ContentWrapper, ArticleWrapper} from './Components/Wrapper'
import Header from './Components/Header/index.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <ContentWrapper>
        <ArticleWrapper>
          <Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
            <img src={logo} className="App-logo" alt="logo" />
          </ArticleWrapper>
        </ContentWrapper>
      </MainWrapper>
    </div>
  );
}

export default App;
