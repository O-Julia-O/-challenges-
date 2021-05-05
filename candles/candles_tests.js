describe("birthdayCakeCandles", function() {
    it("Look for quantity of tallest candles", function() {
        assert.equal(birthdayCakeCandles([3, 2, 1, 3]), 2);
    });
    
    it("Look for quantity of tallest candles", function() {
        assert.equal(birthdayCakeCandles([1, 4, 1, 3]), 1);
    });
    
    it("Look for quantity of tallest candles", function() {
        assert.equal(birthdayCakeCandles([4, 4, 1, 3]), 2);
    });
    
    it("Look for quantity of tallest candles", function() {
        assert.equal(birthdayCakeCandles([4, 4, 4, 4]), 4);
    });
    
    it("Look for quantity of tallest candles", function() {
        assert.equal(birthdayCakeCandles([2, 2, 1, 2]), 3);
    });
});