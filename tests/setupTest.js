var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();

//---------------modules
var playerData = require('../js/data/playerData')
var places = require('../js/data/placesData.js')
var logic = require('../js/logic')


describe('Set up tests', () => {
    context('player start ',  () => {
        it('localizations should be 47',  () =>  {
            assert.equal(playerData.instance, 47,"player is on default position");
            //player.equipment.should.equal(47);
        });
        it('equipment should be empty',   () =>  {
            //expect(player.equipment).to.equal(0);
            playerData.equipment.should.equal(0);
        });
        it('items should be restarted',  () =>  {
            playerData.necessaryItems.should.equal(0);
            playerData.skin.should.equal(0);
            playerData.dragon.should.equal(0);
        });
    });
});


describe('Moving functions tests', () => {
    const up = 38
    const down = 40
    const left = 37
    const right = 39
    var places = require('../js/data/placesData.js')
    var logic = require('../js/logic')
    it('can go up', ()=>{
        console.log(places[1][1])
        logic.takeItem(places[4][4],places[4][4].locItem[0])
        playerData.equipment.should.equal(places[4][4].locItem[0]);
    })
});