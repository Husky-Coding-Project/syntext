const app = require('./app') // the actual Express application
const config = require('./utils/config')
//const logger = require('./utils/logger')
const snippetRouter = require('./controllers/snippets')

const router = snippetRouter.get('/api')




app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
