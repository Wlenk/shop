console.clear();
setInterval(function(){
    if(lastLog.indexOf("19060 ")!=-1){
        console.clear();
        console.log('%c欢迎进入WlenkShop 御坂10032号连接正常','color: #FDF2C0;background:#0C0912;padding:10px;border-radius:10px;font-size:24px;');
    }
},1);

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
var ids=['1965076240','1939721553','1934251776','1929711014','1440570723','1883105723','1323303328','579954','1323304363','1843720688','537787665','1353428173','1811408619','1409329655','1384026889','26096272','1384026889','496869422','1430850573','537787665','1377530437','1817762859','1804320463','496107851'];
var ps;
function play() {
	var player = $("#player")[0];
	ps=ids[randomNum(0,ids.length)];
	if($("#playersrc").attr("src")!="https://music.163.com/song/media/outer/url?id="+ps){
		$("#playersrc").attr("src","http://music.163.com/song/media/outer/url?id="+ps);
		player.load();
	}else{
	    return play();
	}
	console.log("正在连接音乐API....");
	$.ajax({
        url: 'https://music.163.com/api/song/media?id='+ps,
        type: 'get',
        dataType: 'jsonp',  // 请求方式为jsonp
        jsonpCallback: "played",  // 自定义回调函数名
        data: {}
    });
    return;
}
function tos(time) {
        var s = '';
        var min = time.split(':')[0];
        var sec = time.split(':')[1];
        s = Number(min*60) + Number(sec);
        return s;
}
function isin(a,b){
if(a>=b-0.5 && a<=b+0.5) return true;
return false;
}

var times=0;
$("#player").on('ended',function(){play();});
$("#player").on(
    "timeupdate", 
    function(event){
        for(var i=0;i<gc.length;i++){
            var aa=gc[i].replace("[","(").replace("]",")");
            var result = aa.match(/\(([^)]*)\)/);
            if (result) {
            var a=tos(result[1]);
            var times=this.currentTime;
                if(isin(a,times)){
                    if(gc[i].replace("[","(").replace("]",")").replace("(","").replace(")","").replace(result[1],"")!=""){
                        $("#gc").html(gc[i].replace("[","(").replace("]",")").replace("(","").replace(")","").replace(result[1],""));
                    }
                }
            }
        }
    }
);
var chromeBypass=false;
$(document.body).click(function(){
    if(!chromeBypass){
        if(player.paused) player.play();
        chromeBypass=true;
    }
});
var gc=[];
function played(b){
	console.log("连接成功，请求到的数据:",b);
    gc=b.lyric.split("\n");
    gc=gc.filter(function (s) {
        return s && s.trim(); 
    });
	console.log("排序成功:",gc,"音乐准备就绪!");
	$.get("https://tenapi.cn/wyyinfo/?id="+ps,function(b){b=JSON.parse(b);
	    console.log('%c播到的是《'+b.data.songs+'》','color: #fff;background:#0066FF;padding:10px;padding-left:30px;padding-right:30px;border-radius:50px;font-size:20px;');
	    $("#gc").html('已加载《'+b.data.songs+'》,do小御坂开心的说道。');
	})
    if (player.paused){
        try{
            player.play();
        }catch(e){
            
        }
    }else {
        player.pause();
    }
}
function loadScript(src, callback) {
 var script = document.createElement('script'),
  head = document.getElementsByTagName('head')[0];
 script.type = 'text/javascript';
 script.charset = 'UTF-8';
 script.src = src;
 if (script.addEventListener) {
  script.addEventListener('load', function () {
   callback();
  }, false);
 } else if (script.attachEvent) {
  script.attachEvent('onreadystatechange', function () {
   var target = window.event.srcElement;
   if (target.readyState == 'loaded') {
    callback();
   }
  });
 }
 head.appendChild(script);
}
function loadScript(src, callback) {
 var script = document.createElement('script'),
  head = document.getElementsByTagName('head')[0];
 script.type = 'text/javascript';
 script.charset = 'UTF-8';
 script.src = src;
 if (script.addEventListener) {
  script.addEventListener('load', function () {
   callback();
  }, false);
 } else if (script.attachEvent) {
  script.attachEvent('onreadystatechange', function () {
   var target = window.event.srcElement;
   if (target.readyState == 'loaded') {
    callback();
   }
  });
 }
 head.appendChild(script);
}
var loadStyle = function(url) {
			var link = document.createElement('link');
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = url;
			var head = document.getElementsByTagName("head")[0];
			head.appendChild(link);
		};
setTimeout(function(){
    console.clear();
    play();
    console.log('%c欢迎进入WlenkShop 御坂10032号连接正常','color: #FDF2C0;background:#0C0912;padding:10px;border-radius:10px;font-size:24px;');
},200);
