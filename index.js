const express = require("express");

const app = express();

app.get('/',function(req,res){
    res.send('Hi There My Friend Yo');
});

app.listen(8080,function(){
    console.log('Listening to the port 8080');
});

