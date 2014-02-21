/**
 * Created by xiaofen on 14-2-21.
 */
describe('Result Render',function(){
    beforeEach(function(){
        document.getElementById('input_guess').value= 1234;
        process_guess_num();
    });
    afterEach(function(){
        restart();
    });

    it('should let input_number store into guess_number ',function(){
        process_guess_num();
        var guess_num=localStorage.guess_number;

        expect(guess_num).toBe('1234');
    });

    it('should let times add 1',function(){
        var times1 = localStorage.times.length;
        process_guess_num();
        var times2 = localStorage.times.length;

        expect(times2-times1).toBe(1);
    });

    it('should clear the input',function(){
        process_guess_num();
        var input=document.getElementById('input_guess').value;

        expect(input).toBe('');
    });
});