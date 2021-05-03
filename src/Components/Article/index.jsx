import styled from 'styled-components'

const Header = styled.h1`
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Paragraph = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
  height: 420;
  width: 640;
  display: block;
  margin: auto;
  flex-direction: column;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export {
    Header,
    Paragraph,
    Image,
    List
}