const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('news-portal api ruunning')
})

// news api

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
    console.log(req.params.id);
})

// category-news api with id

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '0') {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews);
    }
})

// all news api

app.get('/news', (req, res) => {
    res.send(news);
})

// news categories

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('News-portal server running on port:', port);
})