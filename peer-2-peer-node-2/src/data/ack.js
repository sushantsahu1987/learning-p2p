class Ack {

    data = {};
    constructor() {
      this.data.type="ack"
      this.data.message = "ack";
      this.data.seq = 0;
      this.data.time = new Date().getTime();
    }
  
    toJson() {
      return JSON.stringify(this.data);
    }
  
  }
  
  module.exports = Ack;
  