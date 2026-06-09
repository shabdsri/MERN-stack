const express = require('express');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
require('./connection')
const cors = require('cors')

const app = express();

const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use( '/user' , userRouter)
app.use( '/product' , productRouter)

app.get('/' , (req , res) => {
    res.send('response from express')
});

//add
app.get('/add' , (req , res) => {
    res.send('response from add')
});



//update
app.get('/update' , (req , res) => {
    res.send('response from update')
});

//delete
app.get('/delete' , (req , res) => {
    res.send('response from delete')
});

app.listen(port , () => {
    console.log('server started');
    
})