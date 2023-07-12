const request = require('request');
require('dotenv').config();

if (process.env.WORKFLOW_URI == undefined)
{
  
  console.log("WORKFLOW_URI is undefined. You need to provide the WORKFLOW URL.");
  console.log('ERROR: UNABLE TO CALL TO WORKFLOW');
  console.log('Make sure you have set the environment variable WORKFLOW_URI to the correct endpoint.');

} else {

    console.log('CALLING WORKFLOW ...');

    var logicAppUrl = process.env.WORKFLOW_URI;
    const options = {
    method: 'POST',
    url: logicAppUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        // add your request body here
    },
    json: true
    };

    request(options, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(body);
    });

}