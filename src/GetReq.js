async function getArticleOne () {

    try {
        const res = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json`, {
            method: 'GET',
        });
  
        const articleOneJSON = await res.json();
        console.log(articleOneJSON)
        return articleOneJSON;
  
    } catch (e) {
        console.log(e)
    }
  }
  
  async function getArticleTwo () {
  
    try {
        const res = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json`, {
            method: 'GET',
        });
  
        const articleTwoJSON = await res.json();
        return articleTwoJSON;
  
    } catch (e) {
        console.log(e)
    }
  }
  
  async function getArticleThree () {
  
    try {
        const res = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json`, {
            method: 'GET',
        });
  
        const articleThreeJSON = await res.json();
        return articleThreeJSON;
  
    } catch (e) {
        console.log(e)
    }
  }
  
  async function getArticleFour () {
  
    try {
        const res = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json`, {
            method: 'GET',
        });
  
        const articleFourJSON = await res.json();
        return articleFourJSON;
  
    } catch (e) {
        console.log(e)
    }
  }
  
  async function getArticleFive () {
  
    try {
        const res = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json`, {
            method: 'GET',
        });
  
        const articleFiveJSON = await res.json();
        return articleFiveJSON;
  
    } catch (e) {
        console.log(e)
    }
  }

export {
    getArticleOne,
    getArticleTwo,
    getArticleThree,
    getArticleFour,
    getArticleFive
}