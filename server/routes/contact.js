const express = require('express')
const router = express.Router()

const queries = require('../ContactQueries.js')

router.get("/", (request, response, next) => {
    queries.list().then(contact => {
        response.json({contact})
    }).catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(contactItem => {
        contactItem
            ? response.json({contactItem})
            : response.status(404).json({message: 'Not found'})
    }).catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body).then(contactItem => {
        response.status(201).json({contactItem: contactItem})
    }).catch(next)
})

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true})
    }).catch(next)
})

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(contactItem => {
        response.json({contactItem: contactItem[0]})
    }).catch(next)
})

module.exports = router
