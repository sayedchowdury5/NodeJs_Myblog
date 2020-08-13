//define the modules or packages
var express = require('express');
var moragan = require('morgan');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');//exported
const { result } = require('lodash');
const { find } = require('./models/blogModel');
const { render } = require('ejs');

//call the Express function 
const app = express();

//connect to mongoDB database
const dbURI = 'mongodb+srv://sayed:59395@nodejs.opt6v.mongodb.net/nodeNinja?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(8080)) //console.log('connected to DB'))
.catch((err) => console.log(err));


//register viewengine
app.set('view engine', 'ejs');
//app.set('views', 'myviews');  //configue new view

//Listen for requests
//app.listen(8080);

//create middleware to check request
// app.use((req, res, next) => {
//     console.log('New request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

//using third party middlware to check request
app.use(express.static('public')); //middleware and static files
app.use(express.urlencoded({ extended: true })); //encode all url data
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('5f350d9ebee0d01008c30012')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

//**********Render the content********** */
// app.get('/', (req, res) => {
//     //res.send('<p>home page</p>');
//     //res.sendFile('./views/index.html', {root: __dirname});

//     const blog = [
//         {title: 'Template 1', snippet: 'This is first template'},
//         {title: 'Template 2', snippet: 'This is second template'},
//         {title: 'Template 3', snippet: 'This is third template'},
//     ];

//     res.render('index', {title: 'Home', blog});
// });

//routes
app.get('/', (req, res) => {
    res.redirect('/blogModel')
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

//blog Routes
app.use(blogRoutes);

//404 page using middleware
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});