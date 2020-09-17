// const request = require('request');

// let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=computer%20programming";

// let options = {json: true};



// x = request(url, options, (error, res, body) => {
//     if (error) {
//         return  console.log(error)
//     };

//     if (!error && res.statusCode == 200) {
//         return(body);
//     };
// });

// console.log(x)











const fetch = require('node-fetch');

let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=computer%20programming";

let settings = { method: "Get" };

y= fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        return (json["query"]["pages"])
});


console.log(y);