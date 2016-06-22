var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res) {
  console.log('got here')
  res.sendFile('/home.html', {root : './public'});
})

var port = 3005
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
