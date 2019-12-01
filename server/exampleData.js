/* PUTS IN EXAMPLE DATA FOR THE SERVER */
/* RUN MANUALLY ONCE TO POPULATE YOUR DB */
/* KEEP THE JSON UPDATED WITH ALL CONTENT REQURED FOR THE SITE */

var fs = require('fs'),
    axios = require('axios');

const url = "http://localhost:5000/api/"; //SET THIS TO THE ENVIRONMENT YOU WANT TO WRITE TO!

fs.readFile('exampleData.json', 'utf8', function (err, data) {

    //Check for errors
    if (err) {
        console.log(`${err.name}: ${err.message}`);
        return;
    }

    //Save the sate in the listingData variable already defined
    const exampleData = JSON.parse(data);

    for (const request of exampleData) {
        if (request.method === 'post') {
            axios.post(`${url}${request.endpoint}`, request.content)
        }
        else if (request.method === 'put') {
            axios.put(`${url}${request.endpoint}`, request.content)
        }
    }

});

/*
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */