
describe("Time Convertion", function() {
    it("12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock", function() {
        assert.equal(timeConversion("12:00:00AM"), "00:00:00")
    });

    it("12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock", function() {
        assert.equal(timeConversion("12:00:00PM"), "12:00:00")
    });

    it("07:05:45PM must return 19:05:45", function() {
        assert.equal(timeConversion("07:05:45PM"), "19:05:45")
    });
});