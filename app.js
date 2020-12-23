const express = require('express');
// set up express app
const app = express();
// listen for requests 
app.listen(3000);
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