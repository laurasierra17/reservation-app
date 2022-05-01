// set up express server
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// database
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'restaurants_workbench'
})

// to insert stuff into our database
app.post('/create', (req,res) => {
    console.log(req.body)
    // variables sent from the frontend
    const name = req.body.name
    const email = req.body.email
    const number = req.body.number
    const restaurantname = req.body.restaurantname
    const partysize = req.body.partysize
    const datetime = req.body.datetime

    // send to the database
    db.query("INSERT INTO users (name, email, number, restaurantname, partysize, datetime) VALUES (?, ?, ?, ?, ?, ?)",
        [name, email, number, restaurantname, partysize, datetime],
        (err, result) => {
            if (err) throw new Error(err)
            else res.send("Values Inserted to users table") // confirm this work
        }
    )
})

// get list of restaurants from database
app.get('/', (req, res) => {
    db.query("SELECT * FROM restaurants", (err, result) => {
        if (err) throw new Error(err)
        else res.send(result)
    })
})

// get list of bookings from database
app.get('/create', (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) throw new Error(err)
        else res.send(result)
    })
})

// port, is it running or not
app.listen(3001, () => {
    console.log("server is running in port 3001")
})