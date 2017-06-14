define(['jquery'],function($){
  function GoTop(){
    this.init();
    this.bind();
  }
  GoTop.prototype.init = function(){
    var $button = $('<div class="gotop"><a href="#"><span class="iconfont2">&#xe605;</span></a></div>')
    $('body').append($button);
    $('.gotop').css({
      width: '50px',
      height: '50px',
      border: '1px solid #ddd',
      'border-radius': '50%',
      background: '#fff',
      'line-height': '50px',
      'font-size': '25px',
      'font-weight': 'bold',
      'text-align': 'center',
      position: 'fixed',
      bottom: '20px',
      right: '20px', 
      'z-index': 1,
      opacity : 0,
      'font-family': 'iconfont2'      
    })
    $('.gotop a').css({
      width: '100%',
      height: '100%',
      'text-decoration': 'none',
      color: '#666'
    })
  }
  GoTop.prototype.bind = function(){
    $(window).on('scroll',function(){
      if($(window).scrollTop()>1200){
        $('.gotop').css('opacity','1')
      }else{
        $('.gotop').css('opacity','0')
      }
    })
  }
  return GoTop;
})