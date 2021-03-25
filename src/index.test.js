var expect = require('chai').expect;
var starWars = require('./index');

describe('gitpractise-starwars-name', function() {
    describe('all', function () {
        it('should should be an array of strings', function () {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `Nom Anor`', function() {
            expect(starWars.all).to.include('Nom Anor');
        });
    });

    describe('random', function() {
        it('should return a random item from the starWars.all', function() {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
    });
});