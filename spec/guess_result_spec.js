describe("GuessResult", function () {
    beforeEach(function(){
        localStorage.times = '';
        localStorage.result = '';
    })
    afterEach(function(){
        localStorage.times = '';
        localStorage.result = '';
    })

    it("should be correct if times=4 and result='4A0B'", function () {
        localStorage.times = '1111';
        localStorage.result = '4A0B';
        var guess_result = result_render();

        expect(guess_result).toBe('guess_correct');

    });

    it("should be correct if times=6 and result='4A0B'", function () {
        localStorage.times = '111111';
        localStorage.result = '4A0B';
        var guess_result = result_render();

        expect(guess_result).toBe('guess_correct');

    });

    it("should be wrong if times=4 and result='2A0B'", function () {
        localStorage.times='1111';
        localStorage.result='2A0B';
        var guess_result=result_render();

        expect(guess_result).toBe('guess_wrong');

    });

});


