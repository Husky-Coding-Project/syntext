const snippetRouter = require('express').Router()
const Snippet = require('../utils/db')

snippetRouter.get('/:id', (req, res) => {
    Snippet.getSnippetByID(req.params.id)
    .then(code =>{
        res.json(code)
    })
})


module.exports = snippetRouter