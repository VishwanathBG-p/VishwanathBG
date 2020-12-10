/*const express = require('express')
const app = express()
const port = 5000

app.post('/', (req, res) => {
    
  /*res.send(`hello ${req..name}`)
  res.send('helloworld')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/
var express = require('express');
const port=3000
var path=require('path')

var app = express();
/*app.use(express.static('public'))*/
app.use('/static', express.static(path.join(__dirname, "/public")))

app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
})

/*app.get('/', function(req, res){
  res.send('Hello World');
});*/

/* istanbul ignore next */
/*if (!module.parent) {
  app.listen(5000);
  console.log('Express started on port 3000');
}*/