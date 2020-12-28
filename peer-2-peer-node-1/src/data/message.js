class Message {

  data = {};
  constructor(msg, seq) {
    this.data.type="message"
    this.data.message = msg;
    this.data.seq = seq;
    this.data.time = new Date().getTime();
  }

  toJson() {
    return JSON.stringify(this.data);
  }

}

module.exports = Message;
