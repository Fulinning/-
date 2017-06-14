define(['jquery'],function($){
  function Exposure ($node,callback){
    this.$node = $node;
    this.bind();
  }
  Exposure.prototype.isVisible = function($node){
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var offsetTop = $node.offset().top;
    var nodeHeight = $node.outerHeight(true);
    if(windowHeight+scrollTop>offsetTop && offsetTop+nodeHeight>scrollTop){
      return true;
    }else{
      return false;
    }
  }
  Exposure.prototype.bind = function(){
    var _this = this;
    $(window).on('scroll', function () {
      if(_this.isVisible(_this.$node)){
        _this.callback();
      }
    })
  }
  return Exposure;
})