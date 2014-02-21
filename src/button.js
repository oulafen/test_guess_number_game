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

function process_guess_num() {
    var input = document.getElementById('input_guess').value;
    var input_judge = judge_number(input);
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
        $('input#input_guess').focus();
    });
    get_random_number();
}

