const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const { UDP_SENDER_PORT, UDP_RECEIVER_PORT_1 } = require("../constants");
const { Message, Ack } = require("../data");

module.exports = () => {
  server.on("error", (err) => {
    console.log(`UDP server error :  \n${err.stack}`);
    server.close();
  });

  server.on("message", (msg, rinfo) => {
    console.log(`UDP receriver port `, UDP_RECEIVER_PORT_1);
    const m = JSON.parse(String(msg));
    console.log(rinfo);
    if (m.type !== "ack") {
      console.log(`received following message: ${m.message}`);
      sendAcknowledgement();
    } else {
      console.log(`received ack from `, UDP_RECEIVER_PORT_1);
    }
  });

  server.on("connect", () => {
    console.log("udp server connected successfully ", UDP_SENDER_PORT);
  });

  server.on("listening", () => {
    const address = server.address();
    console.log(`UDP server is running on ${address.address}:${address.port}`);
  });
  server.bind(UDP_SENDER_PORT);

  return server;
};

function sendAcknowledgement() {
  const ack = new Ack();
  const buffer = Buffer.from(ack.toJson());
  const client = dgram.createSocket("udp4");
  client.send([buffer], UDP_RECEIVER_PORT_1, (err) => {
    if (err) {
      console.log("error ", err);
    }
    console.log(`sending ack to ${UDP_RECEIVER_PORT_1} ${ack.toJson()}`);
    client.close();
  });
}
