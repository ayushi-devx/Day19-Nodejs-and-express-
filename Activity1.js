const express=require('express');
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>hello & welcome</h1>')
})
app.get('/activity1',(req,res)=>{
res.sendFile(`${__dirname}/activity1.html`);
})
app.listen(3006);