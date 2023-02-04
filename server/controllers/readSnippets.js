const readSnippetRouter = require('express').Router()
const Snippet = require('../db/db')

readSnippetRouter.get('/:id', (req, res) => {
    Snippet.getSnippetByID(req.params.id)
    .then(result =>{
        let id;
        let type;
        let length;
        
        const processedSnippetData = result.map((line) => {
            id = line.id;
            type = line.snippet_type;
            length = line.snippet_length;
            return line.line_text
        })

        const processedResult = {
            id: id,
            type: type,
            length: length,
            data: processedSnippetData
        }

        console.log(processedResult)
        
    })
})


module.exports = readSnippetRouter