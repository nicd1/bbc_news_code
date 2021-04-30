import React from 'react';
import { PaginationBar, PaginationNo} from './index.jsx';

function Pagination (){
    return(
        <PaginationBar>
            <PaginationNo href='#'>&laquo;</PaginationNo>
            <PaginationNo href='#'>1</PaginationNo>
            <PaginationNo href='#'>2</PaginationNo>
            <PaginationNo href='#'>3</PaginationNo>
            <PaginationNo href='#'>4</PaginationNo>
            <PaginationNo href='#'>5</PaginationNo>
            <PaginationNo href='#'>&raquo;</PaginationNo>
        </PaginationBar>
    )
};

export default Pagination;