function Gotop($ct) {
  this.$ct = $ct;
  this.bind()
}
Gotop.prototype.bind = function(){
  var _this = this;
  $(window).on('scroll',function(){
    if($(window).scrollTop()>340){
      _this.$ct.css('display','block')
    }
    if($(window).scrollTop()<340){
      _this.$ct.css('display','none')
    }
  })
}
new Gotop($('#go-top'))
var touchFunc = function(obj,type,func) {
    //滑动范围在5x5内则做点击处理，s是开始，e是结束
    var init = {x:1,y:1,sx:0,sy:0,ex:0,ey:0};
    var sTime = 0, eTime = 0;
    type = type.toLowerCase();

    obj.addEventListener("touchstart",function(){
        sTime = new Date().getTime();
        init.sx = event.targetTouches[0].pageX;
        init.sy = event.targetTouches[0].pageY;
        init.ex = init.sx;
        init.ey = init.sy;
        if(type.indexOf("start") != -1) func();
    }, false);

    obj.addEventListener("touchmove",function() {
        event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        init.ex = event.targetTouches[0].pageX;
        init.ey = event.targetTouches[0].pageY;
        if(type.indexOf("move")!=-1) func();
    }, false);

    obj.addEventListener("touchend",function() {
        var changeX = init.sx - init.ex;
        var changeY = init.sy - init.ey;
        if(Math.abs(changeX)>Math.abs(changeY)&&Math.abs(changeY)>init.y) {
            //左右事件
            if(changeX > 0) {
                if(type.indexOf("left")!=-1) func();
            }else{
                if(type.indexOf("right")!=-1) func();
            }
        }
        else if(Math.abs(changeY)>Math.abs(changeX)&&Math.abs(changeX)>init.x){
            //上下事件
            if(changeY > 0) {
                if(type.indexOf("top")!=-1) func();
            }else{
                if(type.indexOf("down")!=-1) func();
            }
        }
        else if(Math.abs(changeX)<init.x && Math.abs(changeY)<init.y){
            eTime = new Date().getTime();
            //点击事件，此处根据时间差细分下
            if((eTime - sTime) > 300) {
                if(type.indexOf("long")!=-1) func(); //长按
            }
            else {
                if(type.indexOf("click")!=-1) func(); //当点击处理
            }
        }
        if(type.indexOf("end")!=-1) func();
    }, false);
};
var $imgList = $('.carousel .img-list'),
    $firstImg = $imgList.find('img').first(),
    $lastImg = $imgList.find('img').last(),
    imgIndex = 0,
    isAnimate = false,
    imgWidth = $firstImg.width(),
    imgNumber = $imgList.find('img').length;
$imgList.prepend($lastImg.clone());
$imgList.append($firstImg.clone());
$imgList.css('width',$imgList.children().length*imgWidth)
$imgList.css('margin-left',-imgWidth)
touchFunc($('.carousel')[0],'left',function(){
  nextImg(1);
})
touchFunc($('.carousel')[0],'right',function(){
  preImg(1);
})
function nextImg(n){
  if(isAnimate){return};
  isAnimate = true;
  $imgList.animate({'margin-left':'-='+imgWidth*n},function(){
    imgIndex += n;
    if (imgIndex===imgNumber){
      $imgList.css('margin-left','-360px');
      imgIndex = 0;
    }
    $('.carousel .dotted-list').children().removeClass('active').eq(imgIndex).addClass('active');
    isAnimate = false;
  })
}
function preImg(n){
  if(isAnimate){return};      
  isAnimate = true;      
  $imgList.animate({'margin-left':'+='+imgWidth*n},function(){
    imgIndex -= n;
    if (imgIndex<0){
      $imgList.css('margin-left',-imgNumber*imgWidth);
      imgIndex = imgNumber-1;
    }
    $('.carousel .dotted-list').children().removeClass('active').eq(imgIndex).addClass('active');
    isAnimate = false;      
  })
}  