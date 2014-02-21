
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

function get_four_digits(num) {
    var a = Math.floor(num) % 10;
    var b = Math.floor(num / 10) % 10;
    var c = Math.floor(num / 100) % 10;
    var d = Math.floor(num / 1000) % 10;
    return [d,c,b,a];
}

function compare_r_num_and_g_num(r_num, g_num) {
    var random_digits = get_four_digits(r_num);
    var guess_digits = get_four_digits(g_num);
    var a = 0, b = 0;
    for (var i = 0; i < 4; i++) {
        if (random_digits[i] == guess_digits[i]) {
            a++;
        }
    }
    _.each(random_digits, function (random_digit) {
        _.each(guess_digits, function (guess_digit) {
            if (random_digit == guess_digit) {
                b++;
            }
        })
    });
    localStorage.result = a + 'A' + (b - a) + 'B';
}

function get_compare_result(r_num, g_num) {
    compare_r_num_and_g_num(r_num, g_num);
    return localStorage.result;
}


