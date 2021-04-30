import styled from 'styled-components'

const MainWrapper = styled.div`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #3F3F42;
`;

const ContentWrapper = styled.main `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 20px 50px 20px 50px;
`;

const ArticleWrapper = styled.article`
padding: 20px;
`;

export {
    MainWrapper,
    ContentWrapper,
    ArticleWrapper
}