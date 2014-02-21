/**
 * Created by xiaofen on 14-2-21.
 */
describe('Integrate Result', function () {
    beforeEach(function () {

        localStorage.times = '';
    });
    afterEach(function () {
        restart();
    });

    it("times should be 4 when clicked 4 times", function () {
        document.getElementById('input_guess').value ;

        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
        var times = localStorage.times.length;

        expect(times).toBe(4);
    });
})