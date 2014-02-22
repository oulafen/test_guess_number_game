/**
 * Created by xiaofen on 14-2-21.
 */
describe('Integrate Result', function () {
    beforeEach(function () {
        restart();
    });
    afterEach(function () {
        restart();
    });

    it("times should be 4 when clicked 4 times", function () {
        document.getElementById('input_guess').value =1234;
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

    it("page should show '猜错1次 1234 1A0B' when random_num=1234 and guess_num=1567",function(){
        document.getElementById('input_guess').value =1567;
        localStorage.random_number=1234;
        process_guess_num();



    })
})