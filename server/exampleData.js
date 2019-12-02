/* PUTS IN EXAMPLE DATA FOR THE SERVER */
/* RUN MANUALLY ONCE TO POPULATE YOUR DB */
/* KEEP THE JSON UPDATED WITH ALL CONTENT REQURED FOR THE SITE */

var fs = require('fs'),
    axios = require('axios');

const url = "http://localhost:5000/api/"; //SET THIS TO THE ENVIRONMENT YOU WANT TO WRITE TO!

fs.readFile('exampleData.json', 'utf8', async function (err, data) {

    //Check for errors
    if (err) {
        console.log(`${err.name}: ${err.message}`);
        return;
    }

    //Save the sate in the listingData variable already defined
    const exampleData = JSON.parse(data);

    keys = {}

    for (const request of exampleData) {

        endpoint = request.endpoint.split('/').map(x => {
            if (x.startsWith(':')) {
                return keys[x.substr(1)];
            } else {
                return x;
            }
        }).join('/')

        console.log(`${request.method}: ${endpoint}`);

        let resp = null;

        if (request.method === 'post') {
            resp = await axios.post(`${url}${endpoint}`, request.content)
        }
        else if (request.method === 'put') {
            resp = await axios.put(`${url}${endpoint}`, request.content)
        }

        if (request.key !== undefined) {
            keys[request.key] = resp.data._id;
        }
    }

});

/*
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
