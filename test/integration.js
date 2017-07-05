var https = require('https');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " URL");
    process.exit(-1);
}

var url = process.argv[2]

https.get(url, function(res) {
  console.log("Got response: " + res.statusCode);
  var content = '';
  res.on('data', function(chunk) {
      console.log('chunk ' + chunk.length);
      content += chunk;
  });
  res.on('end', function() {
      console.log('end');
      console.log(content.length);
      console.log(content);
  });
  if ( content != "Hello World\n") {
    process.exit(-1);
  }
}).on('error', function(e) {
    console.log("Got error: " + e.message);
    process.exit(-1);
});