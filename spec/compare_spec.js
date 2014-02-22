/**
 * Created by xiaofen on 14-2-18.
 */
describe("Compare Result", function () {
    beforeEach(function () {
        localStorage.result = '';
    })
    afterEach(function () {
        localStorage.result = '';
    })

    it("should be 4A0B if random_number=guess_number", function () {
        var result = get_compare_result(1234, 1234);

        expect(result).toBe('4A0B');
    });

    it("should be 0A4B if randon_number=1234 and guess_number=4321 ", function () {
        var result = get_compare_result(1234, 4321);

        expect(result).toBe('0A4B');
    });

    it("should be 2A2B if random_number=1234 and guess_number=1243 ", function () {
        var result = get_compare_result(1234, 1243);

        expect(result).toBe('2A2B');
    });

    it("should be 0A3B if random_number=1234 and guess_number=3127 ", function () {
        var result = get_compare_result(1234, 3127);

        expect(result).toBe('0A3B');
    });

    it("should be 2A0B if random_number=1234 and guess_number=0237 ", function () {
        var result = get_compare_result(1234, 1267);

        expect(result).toBe('2A0B');
    });

    it("should be 0A0B if random_number=1234 and guess_number=5678", function () {
        var result = get_compare_result(1234, 5678);

        expect(result).toBe('0A0B');
    });

    it("should be 1A3B if random_number=1234 and guess_number=1423", function () {
        var result = get_compare_result(1234, 1423);

        expect(result).toBe('1A3B');
    });
});