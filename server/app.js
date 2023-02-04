const express = require('express')
const readSnippetRouter = require('./controllers/readSnippets')
const editSnippetRouter = require('./controllers/editSnippets')

const app = express()
app.use('/api', readSnippetRouter)
app.use('/api', editSnippetRouter)

module.exports = app;
