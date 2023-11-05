const express =  require("express")
require("dotenv").config()
const fileupload = require("express-fileupload")
const cors = require("cors")
const bodyparser = require("body-parser")
const{route} = require("./routes/route")


const app = express()

app.use("/api", route)

app.use(cors({
    "access-control-allow-origin": "*"
 }))
 app.use(express.json())
app.use(fileupload())
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));



app.get("./*", (_,res) =>{
    return res.status(404).send({message:"NOt found"})
})

app.use = (err, req, res , next) =>{
    if(err){
       return res.status(404).send({message:"Not Found"})
    }
    next()
 }

const Port = process.env.PORT || 3000;


app.listen(Port, () =>{
    console.log(`listening on ${Port}`);
})