/**
 * Created by xiaofen on 14-2-21.
 */
function result_render(){
    var result=localStorage.result;
    var times=localStorage.times.length;
    var random_num=localStorage.random_number;
    var guess_num=localStorage.guess_number;
    if(times<6&&result!='4A0B'){
        $(document).ready(function(){
            $('div#result_show').append('<p id="'+times+'">'+ times+'次'+'猜错'+' '+guess_num+' '+'结果：'+result+'</p>');
        })
        return  'guess_wrong';
    }
    if(times==6&&result!='4A0B'){
        $(document).ready(function(){
            $('div#result_show').append('<p id="'+times+'">'+'猜测机会已用完，正确数字为：'+random_num+'</p>');
        })
        return 'guess_wrong';
    }
    if(times<=6&&result=='4A0B'){
        $(document).ready(function(){
            $('div#result_show').append('<p id="'+times+'">'+'恭喜你，猜测正确！'+'</p>');
        })
        return  'guess_correct';
    }

}
//judge_num_is_random()