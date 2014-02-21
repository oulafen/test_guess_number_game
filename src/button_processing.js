function get_random_number() {
    while (1) {
        var a = Math.floor(Math.random() * 10);
        var b = Math.floor(Math.random() * 10);
        var c = Math.floor(Math.random() * 10);
        var d = Math.floor(Math.random() * 10);
        if (a != b & b != c & c != d & a != c & a != d & b != d) {
            localStorage.random_number = d != 0 ? (a + b * 10 + c * 100 + d * 1000) : '0' + (a + b * 10 + c * 100);
            return;
        }
    }
}

function process_guess_num() {
    var random_num = localStorage.random_number;
    var input = document.getElementById('input_guess').value;
    if (random_num == '') {
        alert('请先产生随机数');
    } else if (judge_number(input)) {
        localStorage.times += 1;
        localStorage.guess_number = input;
        console.log(localStorage.guess_number)
        compare_r_num_and_g_num(random_num, input);
        result_render();
        $(document).ready(function(){
            $('input#input_guess').focus().val('');
        });
    }
}

function restart() {
    localStorage.result = '';
    localStorage.random_number = '';
    localStorage.guess_number = '';
    localStorage.times = '';
    $(document).ready(function () {
        $('div#result_show').empty();
        $('input#input_guess').focus().val('');
    });
}
restart();
get_random_number();
