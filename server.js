import express from 'express'

const app = express()
const PORT = process.env.NODE_ENV // || 3000

// bless this function
app.use(express.static('public/views'))
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})
