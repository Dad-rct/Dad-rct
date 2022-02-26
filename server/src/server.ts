import express from "express"
import * as path from "path"
const app = express()
app.listen(1369,()=>{
    console.log("Game server started");
})
app.use(express.static( path.join( __dirname ,"..","..","client","public")))
