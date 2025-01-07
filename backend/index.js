const express = require('express')
const app = express()
const mongoDB = require('./db')
require('dotenv').config(); // Load environment variables

const port = process.env.PORT
console.log(port)
mongoDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/DisplayData'))
app.use('/api', require('./Routes/OrderData'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})