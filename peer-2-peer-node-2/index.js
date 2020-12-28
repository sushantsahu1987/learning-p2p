require("dotenv").config();
const app = require("./src/app");

const { TCP_PORT } = require("./src/constants");

app.listen(TCP_PORT, () => {
  console.log(`Server running on http://localhost:${TCP_PORT}`);
});

process.on('uncaughtException', function(err) { 
	console.log(err) 
}) 
