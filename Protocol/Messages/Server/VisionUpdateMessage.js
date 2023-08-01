const PiranhaMessage = require('../../PiranhaMessage');
class VisionUpdateMessage extends PiranhaMessage {
  constructor (client, player, tick) {
    super()
    this.id = 24109
    this.client = client;
    this.player = player;
    this.tick = tick;
  }

  async encode() {
    this.writeVInt(this.tick);
    this.writeVInt(Math.floor(this.tick / 10));
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeByte(0);
    console.log('Tick', this.tick)
  }
}

module.exports = VisionUpdateMessage;
