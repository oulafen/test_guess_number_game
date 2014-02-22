/**
 * Created by xiaofen on 14-2-19.
 */

describe("Random Number", function () {
    beforeEach(function(){
        localStorage.random = '';
    })

    afterEach(function () {
        localStorage.random = '';
    })

    it("should be a number ", function () {
        get_random_number();
        var is_a_num = !isNaN(localStorage.random_number);

        expect(is_a_num).toBe(true);
    });

    it("should be 4 digits", function () {
        get_random_number();
        var number_digits = localStorage.random_number.length;

        expect(number_digits).toBe(4);
    });

    it("should be different digits", function () {
        get_random_number();
        var number_not_repeat_judge = judge_number_not_repeat(localStorage.random_number);

        expect(number_not_repeat_judge).toBe(1);
    });

    it("should be random", function () {
        var random_judge = judge_num_is_random();

        expect(random_judge).toBe(true);
    });
});