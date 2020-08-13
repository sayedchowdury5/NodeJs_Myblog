const express = require('express');
const blogController = require('../controllers/blogControllers');


const router = express.Router();

//blog routes
router.get('/blogModel', blogController.blog_index);

//**********POST request handling*************
//router.post('/blogs', (req, res) => {});
router.post('/blogs', blogController.blog_create_post);

//**********GET request handling*************
//router.get('/blogs/create', (req, res) => {});
router.get('/blogs/create', blogController.blog_create_get);

//PUT or UPDATE request handling
// router.get('/blogs/:id', (req, res);
//router.get('/blogs/:id', blogController.blog_details);

//DELETE request handling
//router.delete('/blogs/:id', (req, res) => {});
router.delete('/blogs/:id', blogController.blog_delete);

module.exports = router;