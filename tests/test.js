var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();

var go = require('./app.js').go;
var move = require('./app.js').move;


var map = [
    ['0', '0',   1, '0',   1, '0', '0', '0', '0', '0'],
    ['0', 'X',   1, '0', '0', '0',   1,   1, '0',   1],
    ['0', '0',   1,   1, '0', '0',   1, '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0',   1, '0',   1,   1],
    ['0',   1,   1,   1,   1, 'X',   1, '0', '0', '0'],
    ['0', '0', 'X', '0', '0', '0', '0', '0', '0', '0'],
    [  1,   1, '0',   1, '0',   1, '0',   1,   1, '0'],
    ['0',   1, '0',   1,   1, '0', '0',   1, '0', '0'],
    ['0',   1, 'X',   1, '0', '0', '0',   1, '0',   1],
    ['0', '0', '0',   1, '0',   1, '0',   1, '0', '0'],
]


describe('test map', function () {

    it('should exist', function () {
        map.should.be.an('array')
    })
    it('should be two dimentional', function () {
        expect(map[0]).to.have.lengthOf.above(0);
    })
    it('should have walls', function () {
        map[0].should.be.an('array').that.includes(  1);
    })
})

describe('go right', function () {
    var position
    it('should allow', function () {
        // JSON.stringify(go([0,   1], position, map)).should.be( JSON.stringify([0,   1]));
        //assert.equal(go([0,   1], position, map), [0,   1]);
        position = [0, 0]
        expect(go([0,   1], position, map)).to.deep.equal([0,   1])
    });

    it('should deny - wall', function () {
        position = [0,   1]
        expect(go([0,   1], position, map)).to.deep.equal([0,   1])
    });
    it('should deny - end of map', function () {
        position = [0, 9]
        expect(go([0,   1], position, map)).to.deep.equal([0, 9])
    });
});

describe('go left - parameters', function () {
    var tests = [
        {position: [0,   1], args: [0, -  1], expected: [0, 0], text: "allow"},
        {position: [0, 3], args: [0, -  1], expected: [0, 3], text: "deny"},
        {position: [0, 0], args: [0, -  1], expected: [0, 0], text: "deny"}
    ];

    tests.forEach(function (test) {

        it('should -' + test.text, function () {
            expect(go(test.args, test.position, map)).to.deep.equal(test.expected)
        });
    });
});
describe('points - hooks', function () {
    var points;
    var tests = [
        {position: [0, 0], args: [0,   1], expected: 0},
        {position: [0, 0], args: [0, -  1], expected: 0},
        {position: [  1, 0], args: [0,   1], expected:   1}
    ];
    beforeEach(function () {
        points = 0;
    });

    tests.forEach(function (test) {

        it('should be ' + test.expected, function () {
            move(points, test.args, test.position, map).should.equal(test.expected);
        });
    });
})

/*
CHAI
-----------------------------Asserts
var numbers = [  1, 2, 3, 4, 5];
assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

-----------------------------Expect
var expect = require('chai').expect;
var numbers = [  1, 2, 3, 4, 5];

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);

------------------------------Should
var should = require('chai').should();
var numbers = [  1, 2, 3, 4, 5];

numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);
*/