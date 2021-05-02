import axios from 'axios';
import React, { useState } from 'react';

async function getAllArticles() {

    const axiosReq1 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json')
    const axiosReq2 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json')
    const axiosReq3 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json')
    const axiosReq4 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json')
    const axiosReq5 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json')
  
    await axios.all([axiosReq1, axiosReq2, axiosReq3, axiosReq4, axiosReq5]).then(axios.spread(function(res1, res2, res3, res4, res5){
        console.log(res1)
        const articleOne = res1;
        console.log(res2)
        const articleTwo = res2;
        console.log(res3)
        const articleThree = res3;
        console.log(res4)
        const articleFour = res4;
        console.log(res5)
        const articleFive = res5;
    }))
}

export default getAllArticles;