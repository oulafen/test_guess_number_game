
function result_render(){
    var result=localStorage.result;
    var times=localStorage.times;
    var random_num=localStorage.random_number;
    var guess_num=localStorage.guess_number;
    if(times.length<6&&result!='4A0B'){
        $(document).ready(function(){
            $('div#result_show').append(times.length,'次','猜错',' ',guess_num,' ','结果：',result,'<br/>');
        })
        return  'guess_wrong';
    }
    if(times.length==6&&result!='4A0B'){
        $(document).ready(function(){
            $('div#result_show').append('猜测机会已用完，正确数字为：',random_num,'<br/>');
        })
        return 'guess_wrong';
    }
    if(times.length<=6&&result=='4A0B'){
        $(document).ready(function(){
            $('div#result_show').append('恭喜你，猜测正确！','<br/>');
        })
        return  'guess_correct';
    }

}