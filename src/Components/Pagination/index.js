import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PaginationBar } from './index.jsx';

function Pagination ({ location }){

    const [render, setRender] = useState(
        <>
        <Link to="/article1">1</Link>
        <Link to="/article2">2</Link>
        <Link to="/article3">3</Link>
        <Link to="/article4">4</Link>
        <Link to="/article5">5</Link> 
        </>)
    
    useEffect(() => {
        if (!location){
            setRender(<>
                <Link to="/article1">1</Link>
                <Link to="/article2">2</Link>
                <Link to="/article3">3</Link>
                <Link to="/article4">4</Link>
                <Link to="/article5">5</Link> 
                <Link to="/feedback">Feedback</Link> 
                </>
                );
        }
    }, [location])
    return(
        <PaginationBar>
            {render}
        </PaginationBar>
    )
};

export default Pagination;