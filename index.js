const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());

const freshers = require('./data/Fresher.json')
app.get('/freshers', (req, res) => {

    res.send(freshers);
})

app.get('/',(req,res)=>{
    res.send('simple node server side')
});



app.listen(port,()=>{
    console.log(`Simple not sever running ${port}`)
})