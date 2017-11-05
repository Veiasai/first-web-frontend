/**
 * Created by Administrator on 2017/11/5.
 */
$(document).ready(function(){
    $("button").click(function(){
        $.post("http://www.tuling123.com/openapi/api",
            {
                "key": "1a1d8f62e7db4e9ca94f014d89e29675",
                "info": $("input[name='info']").val(),
                "userid" :"11"
            },
            function (result){
                $("input[name='out']").val(result["text"])
        })
    });
});