const { Router } = require("express");
// const fetch = require("node-fetch");

const itemsRouter  = Router();

itemsRouter.get('/posts', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    res.json(response);
});

itemsRouter.post('/posts', async (req, res) => {
    const newPost = req.body
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newPost)
    })
    const createdPost = await response.json();
    res.json(createdPost);
});

itemsRouter.put('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(updatedPost)
    })
    const updatedPostData = await response.json();
    res.json(updatedPostData);

});

itemsRouter.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    res.json(response);
});


module.exports = itemsRouter;