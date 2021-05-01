import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationBar } from './index.jsx';

function Pagination (){
    return(
        <PaginationBar>
                <Link to="/">&laquo;</Link>
                <Link to="/article1">1</Link>
                <Link to="/article2">2</Link>
                <Link to="/article3">3</Link>
                <Link to="/article4">4</Link>
                <Link to="/article5">5</Link>
                <Link to="/">&raquo;</Link>               
            </PaginationBar>
    )
};

export default Pagination;