import styled from 'styled-components'

const PaginationBar = styled.div`
    display: inline-block;
    padding: 40px;
`;

const PaginationNo = styled.a`
    text-decoration: none;
    font-size: 20px;
    padding: 5px 16px;
    :active {
        background-color: red;
        color: #154f96
    }
    :hover {
        background-color: #c4c3c2;
        color: black;
        transition: background-color .2s;
    }
`

export {
    PaginationBar,
    PaginationNo
}
