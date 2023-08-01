const PiranhaMessage = require('../../PiranhaMessage');
const UDPConnectionInfoMessage = require('../Server/UDPConnectionInfoMessage');
const Battle = require('../../../Logic/Battle');

class MatchmakeRequestMessage extends PiranhaMessage {
  constructor(bytes, client, player) {
    super(bytes);
    this.player = player;
    this.client = client;
    this.id = 14103;
  }

  decode() {
    // Do decoding logic here if needed
  }

  async process() {
    const battle = new Battle(this.client);
    battle.run();
  }
}

module.exports = MatchmakeRequestMessage