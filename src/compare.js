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


