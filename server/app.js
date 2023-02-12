const express = require('express')
const readSnippetRouter = require('./controllers/readSnippets')
const editSnippetRouter = require('./controllers/editSnippets')


const app = express()
app.use('/api/read', readSnippetRouter)
app.use('/api/edit', editSnippetRouter)

module.exports = app;

