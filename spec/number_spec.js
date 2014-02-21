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
        var random_num = localStorage.random_number;
        console.log(random_num);
        var is_a_num = judge_is_a_num(random_num);
        expect(is_a_num).toBe(true);

    });

    it("should be 4 digits", function () {

        get_random_number();
        var random_number = localStorage.random_number;
        var number_digits = judge_number_digits(random_number);

        expect(number_digits).toBe(4);

    });

    it("should be different digits", function () {

        get_random_number();
        var random_number = localStorage.random_number;
        var number_not_repeat_judge = judge_number_not_repeat(random_number);

        expect(number_not_repeat_judge).toBe(1);

    });

});