const express = require('express');
const app = express();
const PORT = 8000;

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'Get');
    res.setHeader('Access-Control-Allow_Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require('./routes')(app);

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT)
})