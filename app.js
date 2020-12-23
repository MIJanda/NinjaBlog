const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongoDB
mongoose.connect('mongodb://localhost/blog-ninja', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(3000))
        .catch(err => console.log(err));


// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Coding and Music', snippet: 'lorem ipsum lorem ninja coding lorem ipsum music'},
        {title: 'Production company', snippet: 'lorem ipsum lorem ninja coding lorem ipsum music'},
        {title: 'Def Jam Music', snippet: 'lorem ipsum lorem ninja coding lorem ipsum music'}
    ];

    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'New Blog'});
});

// 404 middleware
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});