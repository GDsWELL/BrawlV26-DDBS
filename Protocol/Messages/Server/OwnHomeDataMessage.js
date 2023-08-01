const PiranhaMessage = require('../../PiranhaMessage')

class OwnHomeDataMessage extends PiranhaMessage {
  constructor (client,player) {
    super()
    this.id = 24101
    this.client = client
    this.player = player
    this.version = 1
  }

  async encode () {

    this.writeVInt(0);
    this.writeVInt(1585502369);  // Timestamp

    this.writeVInt(9339);  // Player Trophies
    this.writeVInt(1337);  // Player Max Reached Trophies

    this.writeVInt(0);
    this.writeVInt(95);  // Trophy Road Reward
    this.writeVInt(99999);  // Player exp set to high number because of the name and bot battle level restriction

    this.writeDataReference(28, 0);  // Player Icon ID
    this.writeDataReference(43, 0);  // Player Name Color ID

    this.writeVInt(0);  // array

        // Selected Skins array
    this.writeVInt(1);
    this.writeVInt(29);
    this.writeVInt(5);  // skinID

        // Unlocked Skins array
    this.writeVInt(1);
    this.writeDataReference(29, 5);

    this.writeVInt(0);  // array

    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);

    this.writeByte(0);  // "token limit reached message" if true
    this.writeVInt(1);
    this.writeByte(1);

    this.writeVInt(0);  // Token doubler ammount
    this.writeVInt(0);  // Season End Timer
    this.writeVInt(0);
    this.writeVInt(0);

    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);  // array

    this.writeByte(8);  // related to shop token doubler

    this.writeByte(1);
    this.writeByte(1);
    this.writeByte(1);

    this.writeVInt(0);
    this.writeVInt(0);

        // Shop Start

    this.writeVInt(1);

    this.writeVInt(1);

    this.writeVInt(10);
    this.writeVInt(1);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);  // [0 = Offer, 2 = Skins 3 = Star Shop]

    this.writeVInt(0);  // Cost
    this.writeVInt(99999);

    this.writeVInt(1);
    this.writeVInt(100);
    this.writeByte(0);  // is Offer Purchased
        
    this.writeByte(0);
    this.writeVInt(0);
    this.writeByte(0);
    this.writeVInt(0);

    this.writeInt(0);

    this.writeString("Hay");

    this.writeByte(0);
    this.writeString();
    this.writeVInt(0);
    this.writeByte(0);
		//shopend

    this.writeVInt(0);  // array

    this.writeVInt(200);
    this.writeVInt(0);  // Time till Bonus Tokens (seconds);

    this.writeVInt(0);  // array

    this.writeVInt(228);  // Tickets
    this.writeVInt(0);

    this.writeDataReference(16, 3);  // Selected Brawler

    this.writeString("PABLO");  // Location
    this.writeString("гитлер");  // Supported Content Creator

    this.writeVInt(0);  // array
    this.writeVInt(0);  // array
    this.writeVInt(0);  // array
    this.writeVInt(0);  // array

    this.writeByte(0);

    this.writeVInt(2019049);

    this.writeVInt(100);
    this.writeVInt(10);

    this.writeVInt(30);
    this.writeVInt(3);
    this.writeVInt(80);
    this.writeVInt(10);
			
    this.writeVInt(50);
    this.writeVInt(1000);

    this.writeVInt(500);
    this.writeVInt(50);
    this.writeVInt(999900);

    this.writeVInt(0);  // array

    this.writeVInt(8);  // array

    this.writeVInt(1);
    this.writeVInt(2);
    this.writeVInt(3);
    this.writeVInt(4);
    this.writeVInt(5);
    this.writeVInt(6);
    this.writeVInt(7);
    this.writeVInt(8);
		

        // Logic Events
    this.writeVInt(1);
 
    this.writeVInt(1);
    this.writeVInt(1);
    this.writeVInt(0);  // IsActive | 0 = Active, 1 = Disabled
    this.writeVInt(86400);  // Timer

    this.writeVInt(0);
    this.writeDataReference(15, 24);

    this.writeVInt(3);

    this.writeString();
    this.writeVInt(0);
    this.writeVInt(0);  // Powerplay game played
    this.writeVInt(0);  // Powerplay game left maximum

    this.writeByte(0);

    this.writeVInt(0);
    this.writeVInt(0);

    this.writeVInt(0);  // array

        // Logic Shop

    this.writeVInt(8);
    this.writeVInt(20);
    this.writeVInt(35);
    this.writeVInt(75);
    this.writeVInt(140);
    this.writeVInt(290);
    this.writeVInt(480);
    this.writeVInt(800);
    this.writeVInt(1250);

    this.writeVInt(8);
    this.writeVInt(1);
    this.writeVInt(2);
    this.writeVInt(3);
    this.writeVInt(4);
    this.writeVInt(5);
    this.writeVInt(10);
    this.writeVInt(15);
    this.writeVInt(20);

    this.writeVInt(3);
    this.writeVInt(10);
    this.writeVInt(30);
    this.writeVInt(80);

    this.writeVInt(3);
    this.writeVInt(6);
    this.writeVInt(20);
    this.writeVInt(60);

    this.writeVInt(1);
    this.writeVInt(0);

    this.writeVInt(1);
    this.writeVInt(1337);

    this.writeVInt(2);  // array
    this.writeVInt(200);  // Max Tokens
    this.writeVInt(20);  // Plus Tokens

    this.writeVInt(8640);
    this.writeVInt(10);
    this.writeVInt(5);

    this.writeVInt(6);

    this.writeVInt(50);
    this.writeVInt(604800);

    this.writeByte(1);  // Box boolean

    this.writeVInt(0);  // array

    this.writeVInt(1);  // Menu Theme
    this.writeInt(1);
    this.writeInt(41000011);  // Theme ID

    this.writeVInt(0);  // array

    this.writeInt(0);
    this.writeInt(1);

    this.writeVInt(0);  // array

    this.writeVInt(1);

    this.writeByte(1);

    this.writeVInt(0);
    this.writeVInt(0);

    this.writeVInt(0);  // High Id
    this.writeVInt(1);  // Low Id

    this.writeVInt(0);
    this.writeVInt(0);

    this.writeVInt(0);
    this.writeVInt(0);

    this.writeString("JS");  // Player Name
    this.writeVInt(1);

    this.writeInt(0);

    this.writeVInt(8);

        // Unlocked Brawlers & Resources array
    this.writeVInt(5);  // count
    this.writeVInt(23);
    this.writeVInt(3);
    this.writeVInt(1);
    this.writeVInt(5);  // csv id
    this.writeVInt(1);  // resource id
    this.writeVInt(0);  // resource amount
    this.writeVInt(5);  // csv id
    this.writeVInt(8);  // resource id
    this.writeVInt(1000);  // resource amount
    this.writeVInt(5);  // csv id
    this.writeVInt(9);  // resource id
    this.writeVInt(0);  // resource amount
    this.writeVInt(5);  // csv id
    this.writeVInt(10);  // resource id
    this.writeVInt(1000);  // resource amount
        // Brawlers Trophies array
    this.writeVInt(1);  // brawlers count
    this.writeDataReference(16, 3);
    this.writeVInt(0);
        // Brawlers Trophies for Rank array
    this.writeVInt(1);  // brawlers count
    this.writeDataReference(16, 3);
    this.writeVInt(0);
    this.writeVInt(0);  // array
        // Brawlers Upgrade Points array
    this.writeVInt(1);  // brawlers count
    this.writeDataReference(16, 3);
    this.writeVInt(0);
        // Brawlers Power Level array
    this.writeVInt(1);  // brawlers count
    this.writeDataReference(16, 3);
    this.writeVInt(0);
        // Gadgets and Star Powers array
    this.writeVInt(1);  // count 
    this.writeVInt(23);
    this.writeVInt(3);
    this.writeVInt(1);
        // "new" Brawler Tag array
    this.writeVInt(0);  // brawlers count
    this.writeVInt(1337);  // Player Gems
    this.writeVInt(1337);
    this.writeVInt(1);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(0);
    this.writeVInt(2);
    this.writeVInt(1585502369);

  }
}

module.exports = OwnHomeDataMessage
