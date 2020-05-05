var assert = require('chai').assert;
var engine = require('../js/engine')
var player = require('../js/data/playerData')



describe('Engine module tests', function() {
    describe('#player start position', function() {
        it('should be 47', function() {
            assert.equal(player.instance, 47);
        });
    });
});

/*
CHAI
-----------------------------Asserts
var numbers = [1, 2, 3, 4, 5];
assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

-----------------------------Expect
var expect = require('chai').expect;
var numbers = [1, 2, 3, 4, 5];

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);

------------------------------Should
var should = require('chai').should();
var numbers = [1, 2, 3, 4, 5];

numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);
*/