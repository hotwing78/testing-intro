"use strict";
var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;


//Muppets
class Muppet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        return ('Wakka Wakka!')
    }

}

class Frog extends Muppet {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    croak() {
        return 'Ribbit Ribbit';
    }

}

//Opperand functions
function sum(num1, num2) {
    return num1 + num2
}

function divide(num1, num2) {
    return num1 / num2
}

function mulitiply(num1, num2) {
    return num1 * num2
}

function subtract(num1, num2) {
    return num1 - num2
}

//SUMMATION
function summation(sumUp) {
    return sumUp.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
    });
}

//MUPPET TEST******************************************
describe('Muppet', function() {
    describe('Frog', function() {

        it('Check the muppet talk', function() {
            var bull = new Frog('Jermiah', 1, 'blue')
            expect(bull.talk()).to.equal('Wakka Wakka!');
        });

        it('Checks the color', function() {
            var bull = new Frog('Jermiah', 1, 'blue');
            expect(bull.color).to.equal('blue')
        });

        it('checks speak function', function() {
            var bull = new Frog('Jermiah', 1, 'blue');
            var speak = bull.croak();
            expect(speak).to.equal('Ribbit Ribbit')
        });
    });
});

//End MUPPET TEST

//Opperand Test******************************************
describe('Opperands', function() {

    it('Check the subtract', function() {
        expect(sum(1, 2)).to.equal(3);
    });
    it('Check the mulitiply', function() {
        expect(mulitiply(2, 2)).to.equal(4);
    });
    it('Check the sum', function() {
        expect(subtract(5, 3)).to.equal(2);
    });
    it('Check the divde', function() {
        expect(divide(60, 10)).to.equal(6);
    });

})

//summation Test*****************************************
describe('Summation', function() {

    it('Sums up to', function() {
        var sumUp = [10, 20, 30, 40, 50];
        expect(summation(sumUp)).to.equal(150);
    })
});
