const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5679139',
    password: 'TyWPbyJuMa',
    database: 'sql5679139'
});

app.get('/', (re, res) => {
    return res.json("test")
})

app.get('/funkos', (req, res) => {
    const sql = "SELECT * FROM funkos";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening");
})
