const express = require('express');
const app = express();
const PORT = 3000;
require('./routes')(app);

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT)
})