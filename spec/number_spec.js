/**
 * Created by xiaofen on 14-2-19.
 */
describe("Guess Number", function () {

    beforeEach(function () {
        localStorage.guess_number = JSON.stringify(['1234', '12er', '1123']);
    });

    afterEach(function () {
        localStorage.guess_number = '';
    })

    it("should be a number ", function () {

        var guess_number = JSON.parse(localStorage.guess_number);
        var is_a_num = judge_is_a_num(guess_number[0]);
        var is_not_a_num = !judge_is_a_num(guess_number[1]);

        expect(is_a_num).toBe(true);
        expect(is_not_a_num).toBe(true);

    });

    it("should be 4 diffrent digits", function () {

        var guess_number = JSON.parse(localStorage.guess_number);
        var number_not_repeat_judge = judge_number_not_repeat(guess_number[2]);
        var number_digits = judge_number_digits(guess_number[0]);

        expect(number_not_repeat_judge).toBe(0);
        expect(number_digits).toBe(4);
    });
});

describe("Random Number", function () {
    beforeEach(function(){
        localStorage.random = '';
    })

    afterEach(function () {
        localStorage.random = '';
    })

    it("should be 4 different digits", function () {

        get_random_number();
        var random_number = localStorage.random_number;
        var number_digits = judge_number_digits(random_number);
        var number_not_repeat_judge = judge_number_not_repeat(random_number);

        expect(number_digits).toBe(4);
        expect(number_not_repeat_judge).toBe(1);

    });

});