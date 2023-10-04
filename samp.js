var t='';
var t1=0;
$(".btn").click(function(){
    t+=$(this).text();
    $("p").text(t);
})
$(".eqbtn").click(function(){
    //console.log(t[0]);
    if(!isNaN(t[0])){
        try{
            t1=eval(t.slice(0,t.length-1));
            $("p").text(t1);
        }
        catch(err){
            $("p").text("NaN");
        }
    }
    else{
        t1=t1+t;
        try{
            t1=eval(t1.slice(0,t1.length-1));
            $("p").text(t1);
        }
        catch(err){
            $("p").text("NaN");
        }  
    } 
    t=''; 
})

$("#clr").click(function(){
    $("p").text("0");
    t='';
})

$("#del").click(function(){
    t=t.replace("DEL","");
    t=t.replace(t[t.length-1],"");
    $("p").text(t);
})


