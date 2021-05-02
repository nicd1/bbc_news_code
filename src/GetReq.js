import axios from 'axios';

async function getAllArticles() {

    const axiosReq1 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json')
    const axiosReq2 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json')
    const axiosReq3 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json')
    const axiosReq4 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json')
    const axiosReq5 = axios.get('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json')
  
    await axios.all([axiosReq1, axiosReq2, axiosReq3, axiosReq4, axiosReq5]).then(axios.spread(function(res1, res2, res3, res4, res5){
        let articleOneRes = res1.data.body;
        let articleTwoRes = res2.data.body;
        let articleThreeRes = res3.data.body;
        let articleFourRes = res4.data.body;
        let articleFiveRes = res5.data.body;
  
        let articles = [articleOneRes, articleTwoRes, articleThreeRes, articleFourRes, articleFiveRes]
        console.log(articles, '__________ARTICLES')
  
        return articles;
  
    }))
  }

export default getAllArticles;