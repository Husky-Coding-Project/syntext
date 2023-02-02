// get the client
const mysql = require('mysql2');
const config = require('./config.js')




const pool = mysql.createPool({
    host: config.MYSQL_HOST, 
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE
}).promise()


const getSnippetByID = (id) => {
    const q = (`SELECT data.line_index, data.line_text 
                FROM snippet_records rec, snippet_data data 
                WHERE rec.id = ${id} AND 
                rec.id = data.id 
                ORDER BY data.line_index ASC;`)
    return pool.query(q)
        .then(result => {
            console.log(result[0])
            return result[0]
        })
}



module.exports = {getSnippetByID}