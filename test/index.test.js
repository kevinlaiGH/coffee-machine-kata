const assert = require('assert');
const ordering = require('../logic.js').ordering;
const messaging = require('../logic.js').messaging;

describe('#ordering()', function () {
    it('should return "Drink maker makes nothing" when "" is passed', function () {
        // Given
        const input = ""
        const expected = "Drink maker makes nothing"
        // When
        const result = ordering(input)
        // Then
        assert.equal(result, expected)
    })
    it('should return "Drink maker makes 1 coffee" when "C::" is passed', function () {
        // Given
        const input = "C::"
        const expected = "Drink maker makes 1 coffee"
        // When
        const result = ordering(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 chocolate" when "H::" is passed', function () {
        // Given
        const input = "H::"
        const expected = "Drink maker makes 1 chocolate"
        // When
        const result = ordering(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 tea" when "T::" is passed', function () {
        // Given
        const input = "T::"
        const expected = "Drink maker makes 1 tea"
        // When
        const result = ordering(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 tea, 1 sugar and 1 stick" when "T:1:0" is passed', function () {
        // Given
        const input = "T:1:0"
        const expected = "Drink maker makes 1 tea, 1 sugar and 1 stick"
        // When
        const result = ordering(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 chocolate, 2 sugar and 1 stick" when "H:2:0" is passed', function () {
        // Given
        const input = "H:2:0"
        const expected = "Drink maker makes 1 chocolate, 2 sugar and 1 stick"
        // When
        const result = ordering(input)
        // Then
        assert.equal(result, expected)
    });

})

describe('#messaging()', function () {
    it('should return "" when "" is passed', function () {
        // Given
        const input = ""
        const expected = "Drink maker forwards nothing"
        // When
        const result = messaging(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return "helloworld" when "M:helloworld" is passed', function () {
        // Given
        const input = "M:helloworld"
        const expected = "Drink maker forwards helloworld"
        // When
        const result = messaging(input)
        // Then
        assert.equal(result, expected)
    });
})


