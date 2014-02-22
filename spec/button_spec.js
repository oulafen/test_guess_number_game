
describe('Confirm Button', function () {
    beforeEach(function () {
        document.getElementById('input_guess').value = 1234;
        process_guess_num();

    });
    afterEach(function () {
        restart();
    });

    it('should let input_number store into guess_number ', function () {
        var guess_num = localStorage.guess_number;

        expect(guess_num).toBe('1234');
    });

    it('should let times add 1', function () {
        var times1 = localStorage.times.length;
        document.getElementById('input_guess').value = 2345;
        process_guess_num();
        var times2 = localStorage.times.length;

        expect(times2 - times1).toBe(1);
    });

    it('should clear the input', function () {
        var input = document.getElementById('input_guess').value;

        expect(input).toBe('');
    });
});

describe('Restart Button', function () {
    beforeEach(function () {
        document.getElementById('input_guess').value = 1234;
        process_guess_num();
    });

    it('should clear guess_number', function () {
        restart();
        var guess_num = localStorage.guess_number;

        expect(guess_num).toBe('');

    });

    it('should clear result', function () {
        restart();
        var result = localStorage.result;

        expect(result).toBe('');

    });

    it('should clear times', function () {
        restart();
        var times = localStorage.times;

        expect(times).toBe('');
    });

    it('should create a new random_number', function () {
        var random_num1 = localStorage.random_number;
        restart();
        var random_num2 = localStorage.random_number;

        expect(random_num1 != random_num2).toBe(true);

    });

});
