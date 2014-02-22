function result_render() {
    var result = localStorage.result;
    var times = localStorage.times.length;
    var random_num = localStorage.random_number;
    var guess_num = localStorage.guess_number;
    if (times < 6 && result != '4A0B') {
        $('div#result_show').append('<p id="' + times + '">' + times + '次猜错' + ' '
            + guess_num + ' ' + '结果：' + result + '</p>');
    }
    if (times == 6 && result != '4A0B') {
        $('div#result_show').append('<p id="' + times + '">' + '猜测机会已用完，正确数字为：' + random_num + '</p>');
    }
    if (times <= 6 && result == '4A0B') {
        $('div#result_show').append('<p id="' + times + '">' + '恭喜你，猜测正确！' + '</p>');
    }

}
