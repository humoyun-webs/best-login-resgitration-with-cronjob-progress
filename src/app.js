const express =  require("express")
require("dotenv").config()


const app = express()


const Port = process.env.PORT || 3000;


app.listen(Port, () =>{
    console.log(`listening on ${Port}`);
})