const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const PEER_1 = 3000;
const buf1 = Buffer.from("Hello Sushant");
const buf2 = Buffer.from("How is World !");

client.connect(PEER_1, 'localhost', (err)=> {
  client.send([buf1, buf2], (err)=> {
    client.close();
  })
})