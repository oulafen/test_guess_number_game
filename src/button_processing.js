input_judge_map = {
    'illegal_digits': function () {
        alert('请输入四位数字');
    },
    'illegal_num': function () {
        alert('请输入数字');
    },
    'illegal_repeat': function () {
        alert('请勿有重复数字');
    }
}

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
    var input = document.getElementById('input_guess').value;
    var input_judge = judge_number(input);
    if (localStorage.random_number == '') {
        alert('请先产生随机数');
        return;
    }
    if (input_judge == 'legal_input') {
        localStorage.times += 1;
        localStorage.guess_number = input;
        compare_r_num_and_g_num(localStorage.random_number, input);
        result_render();
        $(document).ready(function () {
            $('input#input_guess').focus().val('');
        });
    } else {
        input_judge_map[input_judge]();
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
