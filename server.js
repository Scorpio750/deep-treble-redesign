const express = require('express')
const app = express()
const PORT = process.env.NODE_ENV || 3000

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/dist/views/index.html')
})

app.get('css/style.css', (req, res) => {
	console.log('hitting styles?')
})

app.listen(PORT, function() {
    console.log('Listening on port', PORT)
})
