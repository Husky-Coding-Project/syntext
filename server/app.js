const express = require('express')
const snippetRouter = require('./controllers/snippets')

const app = express()
app.use('/api', snippetRouter)
module.exports = app;
