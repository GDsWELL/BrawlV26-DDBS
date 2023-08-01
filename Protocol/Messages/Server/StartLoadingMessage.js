const PiranhaMessage = require('../../PiranhaMessage')

class StartLoadingMessage extends PiranhaMessage {
  constructor (client,player) {
    super()
    this.id = 20559
    this.client = client
    this.player = player
  }

  async encode() {
    this.writeInt(6); //6
    this.writeInt(0);
    this.writeInt(0);

    this.writeInt(6); //players count
    for (let i = 0; i < 6; i++) {
      this.writeInt(0); //High ID
      this.writeInt(i); //Low ID
      this.writeVInt(i);
      let teamIndex = 0;
      if (i > 2) {
        teamIndex = 1;
      }
      this.writeVInt(teamIndex);
      this.writeVInt(0);

      this.writeInt(0); //unk

      this.writeDataReference(16, 3);
      this.writeVInt(0);
      this.writeByte(0);
      this.writeString("VBC BRAWL");
      this.writeVInt(100);
      this.writeVInt(28000000);
      this.writeVInt(43000000);
    }

    //PLAYERS SLOT END#

    this.writeInt(0); //count...

    this.writeInt(0); //Count

    this.writeInt(0); // Unknown

    this.writeVInt(4);
    this.writeVInt(1); //DrawMap
    this.writeVInt(1);

    this.writeByte(1); //2, 39 - Spectating
    this.writeVInt(0); // is Spectating
    this.writeVInt(0);

    this.writeDataReference(15, 24); // map
  }
}

module.exports = StartLoadingMessage;