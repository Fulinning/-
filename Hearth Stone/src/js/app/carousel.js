define(['jquery'],function($){
  function Carousel($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
  }
  Carousel.prototype.init = function(){
    this.$imgList = this.$ct.children().first(),
    this.$firstImg = this.$imgList.children().first(),
    this.$lastImg = this.$imgList.children().last(),
    this.imgIndex = 0,
    this.imgNumber = this.$imgList.children().length;
    this.$imgList.children().not('.show').each(function(){
      $(this).css('z-index',-1)
      $(this).fadeOut();
    })
  }
  Carousel.prototype.bind = function(){
    var _this = this;
    setInterval(function(){
      _this.nextImg(1);
    },5000)}
  Carousel.prototype.nextImg = function(n){
    var _this = this;  
    var afterShow;
    var nowShow = this.$ct.find($('.show')).index();
    this.$imgList.find('.show').fadeOut();
    this.$imgList.find('.show').removeClass('show');
    if(nowShow+n<this.imgNumber){
      this.$imgList.children().eq(nowShow+n).addClass('show');
      afterShow = nowShow + n;
    }else{
      this.$imgList.children().eq(0).addClass('show');
      afterShow = 0;
    }
    this.$ct.find($('li.show')).css('z-index',0)
    this.$ct.find($('li.show')).fadeIn();
  }
  Carousel.prototype.preImg = function(n){
    var _this = this;  
    var afterShow;
    var nowShow = this.$ct.find($('li.show')).index();
    this.$imgList.find('li.show').fadeOut();
    this.$imgList.find('li.show').removeClass('show');
    if(nowShow-n>=0){
      this.$imgList.children().eq(nowShow-n).addClass('show');
      afterShow = nowShow - n;        
    }else{
      this.$imgList.children().eq(this.imgNumber-1).addClass('show');
      afterShow = this.imgNumber-1;
    }
    console.log(this.$ct.find($('li.show')));
    this.$ct.find($('li.show')).css('z-index',0)
    this.$ct.find($('li.show')).fadeIn();
  }
  return Carousel;
})