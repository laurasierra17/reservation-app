// set up express server
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const PORT = 3001

// database
const db = mysql.createConnection({
    user: 'bf4596c455a2d7',
    host: 'us-cdbr-east-05.cleardb.net',
    password: 'b26fd636',
    database: 'heroku_df94b82b09ad7e6'
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
        // if (err) throw new Error(err)
        res.send(result)
    })
})

// get list of bookings from database
app.get('/create', (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) throw new Error(err)
        else res.send(result)
    })
})

// port for heroku
app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running in port ${PORT}`)
})