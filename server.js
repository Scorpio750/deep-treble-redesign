const express = require('express')
const app = express()
const PORT = process.env.NODE_ENV || 3000

// bless this function
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('/views/index.html')
})


app.get('css/:id', (req, res) => {
	console.log('hitting styles?')
})

app.listen(PORT, function() {
    console.log('Listening on port', PORT)
})
