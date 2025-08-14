var colors=["#FF0000","#FF7F00","#FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF","#FF1493","#FF69B4"];
document.getElementById("personalize").onclick=function(){
    var name=prompt("Your name?");
    if (name) document.getElementById("nameLine").innerText="Warm wishes, "+name+"!";
};

var d=new Date();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("dateLine").innerText="Today is: "+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear();

function confetti(){
    var html="";
    for(var i=0; i<500; i++){
        var left=Math.random()*100;
        var size=Math.random()*5+5;
        var color=colors[Math.floor(Math.random()*colors.length)];
        var duration=Math.random()*2+2;
        html+='<div class="confetti" style="left:'+left+'%;width:'+size+'px;height:'+size+'px;background:'+color+';animation-duration:'+duration+'s;"></div>';

    }
    document.getElementById("confetti").innerHTML = html;
}
document.getElementById("celebrate").onclick=confetti;
document.getElementById("flag").onclick=confetti;

var starsHTML="";
for(var i=0; i<150; i++){
    var left=Math.random()*100;
    var size=Math.random()*2+1;
    var duration=Math.random()*5+5;
  starsHTML+='<div class="star" style="left:'+left+'%;width:'+size+'px;height:'+size+'px;animation-duration:'+duration+'s;"></div>';
}
document.getElementById("stars").innerHTML=starsHTML;