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
})