import mysql from 'mysql'

export const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Password@123',
    database : 'blog'
})