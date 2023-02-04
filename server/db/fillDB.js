const {getSnippetData} = require('../example_data/hardcodedsnippets')
const {createSnippet} = require('./db')


const fill = (exampleData) => {
    exampleData.forEach((snippet) => {
        createSnippet(snippet);
    })
}
fill(getSnippetData().short);
fill(getSnippetData().medium);
fill(getSnippetData().long);