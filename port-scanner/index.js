const portscanner = require("portscanner");
const _ = require("lodash");

// const ports = _.range(2999, 3500, 1);

// portscanner.findAPortInUse(ports, '127.0.0.1', function(error, port) {
//     console.log('PORT IN USE AT: ' + port)
//   })

portscanner.checkPortStatus(3000, "127.0.0.1", function (error, status) {
  // Status is 'open' if currently in use or 'closed' if available
  console.log(status);
});
