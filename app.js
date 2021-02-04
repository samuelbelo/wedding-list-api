const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const index = require('./routes/index')

app.use(bodyParser.json())
app.use(express.json())

let port = 5000
app.listen(process.env.port || port, () => {
	console.log('servidor em execução na porta ' + port)
})

app.get('/', function(req, res){
  res.send('END POINT INVÁLIDO!');
});

app.use('/api', index)

module.exports = app