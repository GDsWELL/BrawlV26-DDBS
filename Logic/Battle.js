const VisionUpdateMessage = require('../Protocol/Messages/Server/VisionUpdateMessage');
const StartLoadingMessage = require('../Protocol/Messages/Server/StartLoadingMessage');
const UDPConnectionInfoMessage = require('../Protocol/Messages/Server/UDPConnectionInfoMessage');
class Battle {
  constructor(client, player) {
    this.client = client;
    this.player = player;
    this.subTick = 0;
    this.tick = 0;
    this.started = 0;
  }
 sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  run() {
    this.startBattle();
  }

  async StartBattle() {
    this.started = 1;
    new StartLoadingMessage(this.client).send();
    while (this.started) {
      if (true) {
        this.tick += 1;
        this.subTick = 0;
      this.process();
      await sleep(450)
  }
  }
  }

  process() {
    new VisionUpdateMessage(this.client, this.player,this.tick).send();
  }
}

module.exports = Battle;