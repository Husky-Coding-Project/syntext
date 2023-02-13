// get the client
const mysql = require('mysql2');
const config = require('../utils/config.js')




const pool = mysql.createPool({
    host: config.MYSQL_HOST, 
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE
}).promise()

 

const getSnippetByID = async (id) => {
    try {
        const connection = await pool.getConnection();
        const query = `
            SELECT rec.id, rec.snippet_type, rec.snippet_length, data.line_index, data.line_text 
            FROM snippet_records rec, snippet_data data 
            WHERE rec.id = ${id} AND 
            rec.id = data.id 
            ORDER BY data.line_index ASC;
        `;
        const result = await connection.query(query);
        connection.release();
        return result[0];
    } catch (error) {
        console.error(error);
    }
};

const createSnippet = async (snippet) => {
    const { id, type, length, data } = snippet;
    const connection = await pool.getConnection();

    try {
        // Insert the snippet record into snippet_records table
        const recordQuery = `INSERT INTO syntext.snippet_records (id, snippet_type, snippet_length) VALUES (${id}, '${type}', '${length}');`;
        await connection.query(recordQuery);

        // Insert each array in the data array into snippet_data table
        const dataQueries = data.map((array, arrayIndex) => {
            return `INSERT INTO syntext.snippet_data (id, line_index, line_text) VALUES (${id}, ${arrayIndex}, '${array}');`;
        });
        await Promise.all(dataQueries.map(query => connection.query(query)));
        connection.release();
        return {
            outcome: 'success',
            created: {id, type, length}
        };
    } catch (error) {
        console.error(error);
        connection.release();
        return error;
    }
};


const deleteSnippetByID = async (id) => {
    try {
        const connection = await pool.getConnection();
        const query1 = `DELETE FROM snippet_records WHERE id = ${id}`;
        const query2 = `DELETE FROM snippet_data WHERE id = ${id}`;
        await connection.query(query1);
        await connection.query(query2);
        connection.release();
    } catch (error) {
        console.error(error);
        connection.release();
        return error;
    }
};


module.exports = {getSnippetByID, createSnippet, deleteSnippetByID, pool }