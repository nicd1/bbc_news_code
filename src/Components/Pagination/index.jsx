import styled from 'styled-components'

const PaginationBar = styled.nav`
    padding: 10px;

    a {
        text-decoration: none;
        font-size: 20px;
        padding: 10px 16px;
    }
        a:active {
        background-color: red;
        color: #154f96
    }
    a:hover {
        background-color: #c4c3c2;
        color: black;
        transition: background-color .2s;
    }
`;

export {
    PaginationBar
}
