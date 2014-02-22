function judge_number_not_repeat(num) {
    var digits = get_four_digits(num);
    return digits[0] != digits[1] & digits[0] != digits[2] & digits[0] != digits[3]
        & digits[1] != digits[2] & digits[1] != digits[3] & digits[2] != digits[3];
}

function judge_number(num) {
    var digits = num.length;
    var not_repeat = judge_number_not_repeat(num);
    var is_num = !isNaN(num);
    if (digits != 4) {
        return 'illegal_digits';
    }
    if (!is_num) {
        return 'illegal_num';
    }
    if (!not_repeat) {
        return 'illegal_repeat';
    }
    return 'legal_input';
}

function judge_num_is_random() {
    var num_arr = [], same_num = [], judge_result;
    for (var i = 0; i < 1000; i++) {
        get_random_number();
        num_arr.push(localStorage.random_number);
    }
    for (var i = 0; i < 1000; i++) {
        var same = _.filter(num_arr, function (n) {
            return n == num_arr[i];
        })
        same_num.push(same);
    }
    _.each(same_num, function (same) {
        judge_result = same.length < 10 ? true : false;
    })
    return judge_result;
}

function get_random_number() {
    while (1) {
        var a = Math.floor(Math.random() * 10);
        var b = Math.floor(Math.random() * 10);
        var c = Math.floor(Math.random() * 10);
        var d = Math.floor(Math.random() * 10);
        if (a != b & b != c & c != d & a != c & a != d & b != d) {
            localStorage.random_number = d != 0 ? (a + b * 10 + c * 100 + d * 1000)
                : '0' + (a + b * 10 + c * 100);
            return;
        }
    }
}

function get_four_digits(num) {
    var a = Math.floor(num) % 10;
    var b = Math.floor(num / 10) % 10;
    var c = Math.floor(num / 100) % 10;
    var d = Math.floor(num / 1000) % 10;
    return [d, c, b, a];
}

