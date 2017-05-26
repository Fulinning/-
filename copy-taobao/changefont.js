!function(){
  $(window).on('resize',function(){
    var width = $(window).width()
    var fontsize = (width/360)*16
    $('html').css('font-size',fontsize)
  })
}()