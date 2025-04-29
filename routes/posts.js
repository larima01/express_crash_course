import express from 'express';
import {getPosts, getPost, createPost, updatePost, deletePost} from '../controllers/postController.js';
const router = express.Router();

let posts = [
    {id: 1, title: 'POst One'},
    {id: 2, title: 'POst Two'},
    {id: 3, title: 'POst Three'}
];

//Get all post
router.get('/', getPosts);

//Get single post
router.get('/:id', getPost, );

//Create a new post
router.post('/', createPost);

//Update Post
router.put('/:id', updatePost);

//Delete Post
router.delete('/:id', deletePost);
export default router;