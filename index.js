const express = require("express")
const fetch = require('node-fetch');
const app =express();
let port = process.env.PORT || 3000;


app.get("/wike/:search",(req,res) => {
    let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${req.params.search}`;


    let settings = { method: "Get" };

    y= fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            var getData = json["query"]["pages"]
            var keys = Object.keys(getData);
            res.send({"messages":getData[keys]["extract"]})
    });
});


app.get("/",(req,res) => {
    res.send("Hello Wolrd");
});
app.listen(port,()=>{
    console.log("EXAMPLE LANG TOL");
});








