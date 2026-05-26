const express = require('express');
const userRouter = require('./routers/userRouter');

const app = express();

const port = 5000;

//middleware
app.use( '/user' , userRouter)

app.get('/' , (req , res) => {
    res.send('response from express')
});

//add
app.get('/add' , (req , res) => {
    res.send('response from add')
});

//getAll
app.get('/getAll' , (req , res) => {
    res.send('response from getAll ')
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