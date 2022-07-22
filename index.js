require('./config/db')
const express = require('express')
const FeeRouter = require('./api/reimbursment')
const cors = require('cors')
const app = express();

const port = 3001

var options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(options))

const bodyParser = require('express').json
app.use(bodyParser())

app.use('/invoice',FeeRouter)

app.listen(port,() =>{
    console.log('Server running on port ',port)

})