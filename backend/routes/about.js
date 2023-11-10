// rout/about

module.exports = function(app){
    app.get('/about', (req, res)=>{
        res.send('<h1>about</h1>')
    })
}