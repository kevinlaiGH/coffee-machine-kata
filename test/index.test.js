const assert = require('assert');
const ordering = require('../making-drinks.js').ordering;
const messaging = require('../making-drinks.js').messaging;

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
    it('should return "Drink maker makes 1 coffee" when "C::" and 0.6 are passed', function () {
        // Given
        const input = "C::"
        const givenAmount = 0.6
        const expected = "Drink maker makes 1 coffee"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 chocolate" when "H::" and 0.5 are passed', function () {
        // Given
        const input = "H::"
        const givenAmount = 0.5
        const expected = "Drink maker makes 1 chocolate"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 orange juice" when "O::" and 0.6 are passed', function () {
        // Given
        const input = "O::"
        const givenAmount = 0.6
        const expected = "Drink maker makes 1 orange juice"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 tea" when "T::" and 0.4 are passed', function () {
        // Given
        const input = "T::"
        const givenAmount = 0.4
        const expected = "Drink maker makes 1 tea"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 tea, 1 sugar and 1 stick" when "T:1:0" and 0.4 is passed', function () {
        // Given
        const input = "T:1:0"
        const givenAmount =  0.4
        const expected = "Drink maker makes 1 tea, 1 sugar and 1 stick"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 chocolate, 2 sugar and 1 stick" when "H:2:0" and 0.5 are passed', function () {
        // Given
        const input = "H:2:0"
        const givenAmount = 0.5
        const expected = "Drink maker makes 1 chocolate, 2 sugar and 1 stick"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Missing 0.1" when "H:2:0" and 0.4 are passed', function () {
        // Given
        const input = "H:2:0"
        const givenAmount = 0.4
        const expected = "Missing 0.1"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });
    it('should return "Drink maker makes 1 extra hot coffee" when "Ch::" and 0.6 are passed', function () {
        // Given
        const input = "Ch::"
        const givenAmount = 0.6
        const expected = "Drink maker makes 1 extra hot coffee"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });

    it('should return "____" when "___" are passed', function () {
        // Given
        const tests = [
            {args: [1, 2], expected: 3},
            {args: [1, 2, 3], expected: 6},
            {args: [1, 2, 3, 4], expected: 10}
        ];
        const givenAmount = 0.6
        const expected = "Drink maker makes 1 extra hot coffee"
        // When
        const result = ordering(input, givenAmount)
        // Then
        assert.equal(result, expected)
    });

    // Given all of the inputs entered before
    // When management wants to have daily reports of what is sold and the total amount of money earned so far
    // Then the report should give back how many drink was sold and the total amount of money earned so far
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



