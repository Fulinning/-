!function(){
  var fontsize,width
  function changefont(){
    width = $(window).width()
    fontsize = (width/360)*16
    $('html').css('font-size',fontsize)
  }
  changefont()
  $(window).on('resize',function(){
  changefont()
  })
}()
