const assert = require('assert');
const ordering = require('../logic.js').ordering;

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
})
