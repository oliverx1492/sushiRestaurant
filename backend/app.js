const express = require("express")
const PORT = 3000
const app = express()
const fs = require("fs")
//const cors = require("cors")

//app.use(cors())
app.use(express.json());
app.use((req,res, next) =>  {
    fs.readFile("speisekarte.json", "utf-8", (err,data) => {
        if(err) {
            console.log("Fehler beim lesen der Datei", err)
            res.status(500).json({message: "Internal Server Error"})
            return
        }

        req.speisekarte = JSON.parse(data)
        next()
    })
})



app.get("/", (req,res) => {

    res.json(req.speisekarte)
   

})

app.get("/all", (req,res) => {
    res.json(req.speisekarte)
})

app.post("/filter", (req,res) => {

    console.log(req.body.item)
    const filterSpeisekarte = req.speisekarte.filter(items => items.kategorie == req.body.item)
    console.log(filterSpeisekarte)
    res.json(filterSpeisekarte)



})


app.post("/order", (req,res) => {

    console.log(req.body)

    
    

    res.json({message: "Bestellung angekommen"})
})


app.listen(PORT, ()=> {
    console.log("Running on  Port ", PORT)
})