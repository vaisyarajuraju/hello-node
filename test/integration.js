var axios = require('axios');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " URL");
    process.exit(-1);
}

var url = process.argv[2]
var config = { proxy: { host: "http.proxy.fmr.com", port: 8000 } }

axios.get(url, config)
  .then(function (response) {
    console.log("Got response: " + response.status);
    console.log("Got data: " + response.data);
    if ( response.data != "Hello World\n") {
      process.exit(-1);
    }
  })
  .catch(function (error) {
    console.log(error);
    process.exit(-1);
  });
