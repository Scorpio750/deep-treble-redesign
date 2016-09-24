import express from 'express'

const app = express()
const PORT = process.env.NODE_ENV || 3000

// bless this function
app.use(express.static('public'))
app.use(express.static('public/views'))

app.listen(PORT, function() {
    console.log('Listening on port', PORT)
})
