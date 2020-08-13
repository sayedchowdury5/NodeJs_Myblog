var express = require('express');

//Express App
const app = express();

//register viewengine
app.set('view engine', 'ejs');
//app.set('views', 'myviews');  //configue new view

//Listen for requests
app.listen(8080);
app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', {root: __dirname});

    const blogs = [
        {title: 'Template 1', snippet: 'This is first template'},
        {title: 'Template 2', snippet: 'This is second template'},
        {title: 'Template 3', snippet: 'This is third template'},
    ];

    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

//redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a New Blog'});
});
//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});