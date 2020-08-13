const Blog  = require('../models/blogModel'); //export from blogModel.js

// block_index, blog_details, blog_create_get, blog_create_post, blog_Delete

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1}) //sort in decending order
    .then((result) => {
        res.render('index', {title: 'All Blogs', blog: result});
    })
    .catch((err) => {
        console.log(err);
    });
}


// const blog_details = (req, res) => {
//     const id = req.param.id;
//     //     //console.log(id);
//     //     Blog.findById(id)
//     //     .then(result => {
//     //         console.log(result);
//     //         res.render('details', {blog: result});
//     //     })
//     //     .catch(err => {
//     //         res.status(404).render('404', {title: 'Blog not found});
//     //     });
// };

const blog_create_get = (req, res) => {
    res.render('create', {title: 'Create a New Blog'});

};

const blog_create_post = (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body); //not properly understand

    blog.save()
    .then((result) => {
        res.redirect('/blogModel');
    })
    .catch((err) => {
        console.log(err);
    });
};

const blog_delete = (req, res) => {
    const id = req.param.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs' })
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports = { 
    blog_index,
    //blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete 
 };