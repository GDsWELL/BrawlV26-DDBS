const PiranhaMessage = require('../../PiranhaMessage')

class UDPConnectionInfoMessage extends PiranhaMessage{
  constructor(client, player) {
    super();
    this.id = 24112;
    this.client = client;
    this.player = player;
  }

  encode() {
    this.writeVInt(9339); // Server Port
    this.writeString(); // Server IP
    this.writeInt(0);
    this.writeByte(0);
    this.writeInt(0);
    this.writeByte(0);
  }
}
module.exports = UDPConnectionInfoMessage