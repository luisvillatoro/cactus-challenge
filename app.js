require("dotenv").config()
const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => res.send('Suez Scantland you are a cunt!'))

app.listen(port, () => console.log('Server Ready'))