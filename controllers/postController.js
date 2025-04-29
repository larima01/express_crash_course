let posts = [
    {id: 1, title: 'POst One'},
    {id: 2, title: 'POst Two'},
    {id: 3, title: 'POst Three'}
];

// @description Get all posts
// @route GET /api/posts

export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
        res.status(200).json(posts);    
    
};

// @description Get single posts
// @route GET /api/posts/:id

export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
       const error = new Error (`A post with the id of ${id} was not found`);
       error.status = 404;
       return next(error);
    }
        res.status(200).json(post);

};

// @description Create a new posts
// @route POST /api/posts

export const createPost = (req, res, next) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if(!newPost.title) {
        const error = new Error (`Please include a title`);
        error.status = 404;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts)
};


// @description Upadte a posts
// @route PUT /api/posts/:id

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error (`A post with the id of ${id} was not find `);
        error.status = 404;
        return next(error);
     }
     post.title = req.body.title;
     res.status(200).json(posts);
};

// @description Upadte a posts
// @route PUT /api/posts/:id

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error (`A post with the id of ${id} was not find `);
        error.status = 404;
        return next(error);
     }
     posts = posts.filter((post) => post.id !== id);
     res.status(200).json(posts);
};
