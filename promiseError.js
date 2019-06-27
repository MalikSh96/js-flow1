const fetch = require('node-fetch');
//promise is a proxy value
//represents a value which can be handled some time in the future
fetch('http://example.com/movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    })
    //best way to handle error with promises is .catch
    //this can catch and tracks eventual errors which may occur 
    .catch(error => console.error(error))