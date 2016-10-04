import express from 'express'
import DNS from 'dns'

const app = express()
const PORT = process.env.NODE_ENV || 3000


// bless this function
app.use(express.static('public/views'))
app.use(express.static('public'))

// get private ip addr
DNS.lookup(require('os').hostname(), function (err, add, fam) {
	let APP_PRIVATE_IP_ADDRESS
	APP_PRIVATE_IP_ADDRESS = add
	app.listen(PORT, () => {
		console.log('Listening on port', PORT, 'at private address', APP_PRIVATE_IP_ADDRESS)
	})
})
