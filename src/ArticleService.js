import axios from 'axios';

export async function getArticleByNumber (articleNum) {

    try {
        const res = await axios.get(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-${articleNum}.json`);
        console.log(res)
        console.log("SERVICE LOG: ", res.data);
        return res.data;
  
    } catch (e) {
        console.log(e)
    }
  }
