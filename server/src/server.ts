import express from "express"

const app = express()
app.listen(1369,()=>{
    console.log("Game server started");
})
app.use(express.static(__dirname + "/../../client/public/"))
