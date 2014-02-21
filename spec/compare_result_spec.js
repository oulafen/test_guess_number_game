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

        var guess_num = 1234;
        var random_num = 1234;
        var result = get_compare_result(guess_num, random_num);

        expect(result).toBe('4A0B');

    });

    it("should be 0A4B if randon_number=1234 and guess_number=4321 ", function () {

        var guess_num = 1234;
        var random_num = 4321;
        var result = get_compare_result(guess_num, random_num);

        expect(result).toBe('0A4B');

    });

    it("should be 2A2B if random_number=1234 and guess_number=1243 ", function () {

        var guess_num = 1234;
        var random_num = 1243;
        var result = get_compare_result(guess_num, random_num);

        expect(result).toBe('2A2B');
    });

    it("should be 0A3B if random_number=1234 and guess_number=3127 ", function () {

        var guess_num = 1234;
        var random_num = 3127;
        var result = get_compare_result(guess_num, random_num);

        expect(result).toBe('0A3B');
    });

    it("should be 2A0B if random_number=1234 and guess_number=0237 ", function () {

        var guess_num = 1234;
        var random_num = 1267;
        var result = get_compare_result(guess_num, random_num);

        expect(result).toBe('2A0B');
    });

    it("should be 0A0B if random_number=1234 and guess_number=5678", function () {

        var guess_num = 1234;
        var random_num = 5678;
        var result = get_compare_result(guess_num, random_num);

        expect(result).toBe('0A0B');

    });

    it("should be 1A3B if random_number=1234 and guess_number=1423", function () {

        var guess_num = 1234;
        var random_num = 1423;
        var result = get_compare_result(guess_num, random_num);

        expect(result).toBe('1A3B');

    });


});