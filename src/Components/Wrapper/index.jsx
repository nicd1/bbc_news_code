import styled from 'styled-components'

const MainWrapper = styled.div`
    min-height: 100vh;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #3F3F42;
`;

const ContentWrapper = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 50px auto 50px;
`;

const ArticleWrapper = styled.article`
    padding: 20px;
`;

const PaginationWrapper = styled.footer`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export {
    MainWrapper,
    ContentWrapper,
    ArticleWrapper, 
    PaginationWrapper
}