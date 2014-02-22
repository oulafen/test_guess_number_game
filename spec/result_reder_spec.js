/**
 * Created by xiaofen on 14-2-21.
 */
describe('Result Render', function () {
    beforeEach(function () {
        localStorage.random_number = 1243;
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
    });
    afterEach(function () {
        restart();
    });

    it('page should show "1次猜错 1234 结果：2A2B" when random num is 1243 and guess it is 1234 first', function () {
        var result_show = $('div#result_show').children('p#1').text();

        expect(result_show).toBe('1次猜错 1234 结果：2A2B');
    });

    it('page should show "4次猜错 1234 结果：2A2B" when random num is 1243 and guess the number is 1234 in the fourth', function () {
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        var result_show = $('div#result_show').children('p#4').text();

        expect(result_show).toBe('4次猜错 1234 结果：2A2B');
    });

    it('page should show "猜测机会已用完,正确结果为：1243" when spent the last time to guess wrong', function () {
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        var result_show = $('div#result_show').children('p#6').text();

        expect(result_show).toBe('猜测机会已用完，正确数字为：1243');
    });


    it('page should show "恭喜你，猜测正确！" when guess the number correctly in the first time', function () {
        restart();
        localStorage.random_number = 1243;
        document.getElementById('input_guess').value = 1243;
        process_guess_num();
        var result_show = $('div#result_show').children('p#1').text();

        expect(result_show).toBe('恭喜你，猜测正确！');
    });

    it('page should show "恭喜你，猜测正确！" when guess the number correctly in the fourth time', function () {
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1243;
        process_guess_num();
        var result_show = $('div#result_show').children('p#4').text();

        expect(result_show).toBe('恭喜你，猜测正确！');
    });

    it('page should show "恭喜你，猜测正确！" when guess the number correctly in the last time', function () {
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1243;
        process_guess_num();
        var result_show = $('div#result_show').children('p#6').text();

        expect(result_show).toBe('恭喜你，猜测正确！');
    });

});