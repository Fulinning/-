!function(){
  var fontsize,width
  $(window).on('resize',function(){
    width = $(window).width()
    fontsize = (width/360)*16
    $('html').css('font-size',fontsize)
  })
}()
