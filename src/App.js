import {MainWrapper, ContentWrapper} from './Components/Wrapper';
import ArticleContent from './Components/Article';
import './App.css';
import Pagination from './Components/Pagination';

function App() {
  return (
      <MainWrapper>
        <ContentWrapper>
        <ArticleContent header={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} content={'Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem.'}/>
        </ContentWrapper>
        <Pagination />
      </MainWrapper>
  );
}

export default App;
