const express = require('express')
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>hello & welcome</h1>')
})
app.get('/html',(req,res)=>{
    res.sendFile(`${__dirname}/about.html`);
})


app.listen(6500)