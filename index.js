const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
const { User } = require("./model/User")

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://choi:8740@boilerplate.ns9fg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~~')
})

app.post('/register', (req, res) => {

    const user = new User(req.body)

    user.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

