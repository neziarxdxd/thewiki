const fetch = require('node-fetch');

let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=computer%20programming";

let settings = { method: "Get" };
function getData(){
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        return (json["query"]["pages"])
});
}

console.log(getData());