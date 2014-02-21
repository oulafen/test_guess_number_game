function judge_is_a_num(num) {
    return !isNaN(num);
}

function judge_number_not_repeat(num) {
    var digits = get_four_digits(num);
    return digits[0] != digits[1] & digits[0] != digits[2] & digits[0] != digits[3]
        & digits[1] != digits[2] & digits[1] != digits[3] & digits[2] != digits[3];
}

function judge_number_digits(num) {
    var digit = 0;
    var number = Math.floor(num);
    while (number != 0) {
        digit++;
        number = Math.floor(number / (10 ^ digit));
    }
    return digit;
}

function judge_number(num) {
    var digits = judge_number_digits(num);
    var not_repeat = judge_number_not_repeat(num);
    var is_num = judge_is_a_num(num);
    return digits == 4 & is_num == true & not_repeat == true;
}