const editSnippetRouter = require('express').Router()
const Snippet = require('../db/db')

editSnippetRouter.post('/', (req, res) => {
    // const snippet_ex = {
    //     id: 9, 
    //     type: 'WHILE LOOP', 
    //     length: 'SHORT', 
    //     data: [[2,5], [8, 9]]
    // }

    const {id, type, length, data} = req.body;
    const snippetObject = {
        id: id,
        type: type,
        length: length,
        data: data
    }
    return Snippet.createSnippet(snippetObject)
})

editSnippetRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('request sent')
    return Snippet.deleteSnippet(id)
})

module.exports = editSnippetRouter