// get the client
import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config()
// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'syntext'
// });

// simple query
// connection.query(
//   'SELECT data.line_index, data.line_text FROM snippet_records rec, snippet_data data WHERE rec.id = 123456 AND rec.id = data.id ORDER BY data.line_index ASC;',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
const getSnippet = "SELECT data.line_index, data.line_text FROM snippet_records rec, snippet_data data WHERE rec.id = 123456 AND rec.id = data.id ORDER BY data.line_index ASC;"


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

const result = await pool.query(getSnippet)
console.log(result[0])