const express=require('express');
const connectDB=require('./config/db');

const app=express();

connectDB()

app.use(express.json({extended:false}));

app.get('/',(req,res)=>res.send("Hello"));

app.use('/logs',require('./routes/logs'));
app.use('/techs',require('./routes/techs'));


const PORT =process.env.PORT || 5000;

app.listen(PORT, ()=>console.log("Server Started"));
