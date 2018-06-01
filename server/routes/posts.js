const express = require('express');
const router = express.Router();

const queries = require('../PostsQueries.js');

router.get("/", (request, response, next) => {
    queries.list().then(post => {
        response.json({post});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(post => {
        post
            ? response.json({post})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(post => {
        response.status(201).json({post: post});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(post => {
        response.json({post: post[0]});
    }).catch(next);
});

module.exports = router;
