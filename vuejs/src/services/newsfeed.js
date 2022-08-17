const { queryApi } = require('stock-market-news-api');

queryApi.setApiKey('YOUR_API_KEY');

const query = {
  queryString: 'symbols:TSLA, AAPL', // most recent news from all sources covering TSLA and AAPL
  from: 0, // start with the first. used for pagination
  size: 10, // return 10 most recent articles, sorted by publishedAt
};

async function getArticles(){
    return await queryApi.getArticles(query);
}

function getNews() {
    const data = getArticles()
    return data?data.articles:[]
}

export const newsFeedService = {
    getNews
};