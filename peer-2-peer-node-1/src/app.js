const express = require("express");
const bodyParser = require("body-parser");
const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const UDP = require("./udp");
const { UDP_RECEIVER_PORT_1, UDP_SENDER_PORT } = require("./constants");
const { Message } = require("./data");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const udp = UDP();

app.get("/sender", (req, resp) => {
  resp.send({ receiver_udp: UDP_RECEIVER_PORT_1, sender_udp: UDP_SENDER_PORT });
});

app.post("/post", (req, resp) => {
  const { message } = req.body;
  const m1 = new Message(message, 0);
  const buf1 = Buffer.from(m1.toJson());
  client.send([buf1], UDP_RECEIVER_PORT_1, (err) => {
    if (err) {
      resp.send({ msg: err });
    }
    console.log(`sending msg to ${UDP_RECEIVER_PORT_1}:`, message);
    resp.send({ msg: "ok", buffer: buf1.length });
  });
});

module.exports = app;
