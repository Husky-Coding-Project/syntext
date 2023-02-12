const readSnippetRouter = require('express').Router()
const Snippet = require('../db/db')

readSnippetRouter.get('/getsnippet', (req, res) => {
    console.log(req.query.id)
    Snippet.getSnippetByID(req.query.id)
    .then(result =>{
        let id;
        let type;
        let length;
        console.log({'unprocessed result': result})
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
        res.json(processedResult);
        
    })
})




module.exports = readSnippetRouter