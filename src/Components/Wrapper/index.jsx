import styled from 'styled-components'

const MainWrapper = styled.div`
    background-color: whitesmoke;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #3F3F42;
`;

const ContentWrapper = styled.main `
    display: block;
    margin: 20px 50px 20px 50px;
`;

const ArticleWrapper = styled.article`
`;

export {
    MainWrapper,
    ContentWrapper,
    ArticleWrapper
}