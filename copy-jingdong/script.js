!function(){
  var $imgList = $('#important .carousel .img-list'),
      $firstImg = $imgList.children().first(),
      $lastImg = $imgList.children().last(),
      imgIndex = 0,
      isAnimate = false,
      clicked = false,
      imgNumber = $imgList.children().length;
  $imgList.find('img').not('.show').each(function(){
    $(this).css('z-index',-1)
    $(this).fadeOut();
  })
  $('#important .carousel .btn-pre').on('click',function(){
    clicked = true;
    preImg(1);
    setTimeout(function(){
      clicked = false;
    },2000)
  })
  $('#important .carousel .btn-next').on('click',function(){
    clicked = true;
    nextImg(1);
    setTimeout(function(){
      clicked = false;
    },2000)
  })
  setInterval(function(){
    if(!clicked){
      nextImg(1);
    }
  },2000)    
  function nextImg(n){
    if(isAnimate){return};
    isAnimate = true;
    var afterShow;
    var nowShow = $('#important .carousel img.show').parents('li').index();
    $imgList.find('img.show').fadeOut();
    $imgList.find('img.show').removeClass('show');
    if(nowShow+n<imgNumber){
      $imgList.find('img').eq(nowShow+n).addClass('show');
      afterShow = nowShow + n;
    }else{
      $imgList.find('img').eq(0).addClass('show');
      afterShow = 0;
    }
    $('#important .carousel img.show').css('z-index',0)
    $('#important .carousel img.show').fadeIn(function(){
      isAnimate = false;
    });
    $('#important .carousel .dotted').children().removeClass('active').eq(afterShow).addClass('active');
  }
  function preImg(n){
    if(isAnimate){return};
    isAnimate = true;
    var afterShow;
    var nowShow = $('#important .carousel img.show').parents('li').index();
    $imgList.find('img.show').fadeOut();
    $imgList.find('img.show').removeClass('show');
    if(nowShow-n>=0){
      $imgList.find('img').eq(nowShow-n).addClass('show');
      afterShow = nowShow - n;        
    }else{
      $imgList.find('img').eq(imgNumber-1).addClass('show');
      afterShow = imgNumber-1;
    }
    $('#important .carousel img.show').css('z-index',0)
    $('#important .carousel img.show').fadeIn(function(){
      isAnimate = false;
    });
    $('#important .carousel .dotted').children().removeClass('active').eq(afterShow).addClass('active');
  }   
  $('#important .carousel .dotted>li').on('click',function(){
    var n = $(this).index()-$('.active').index();
    if(n>0){
      nextImg(n);
    }else if(n<0){
      preImg(-n);
    }
  })
  $('#important .carousel').on('mouseenter',function(){
    $('#important .carousel .btn').css('opacity',0.5)
  }) 
  $('#important .carousel').on('mouseleave',function(){
    $('#important .carousel .btn').css('opacity',0)
  }) 
}()
!function(){
  $('#important .extra-main-cd .tab-head').on('mouseenter','li',function(e){
    $('#important .extra-main-cd .tab-head li').each(function(){
      $(this).removeClass('active');
    })
    $(e.target).addClass('active');
    var index = $('#important .extra-main-cd .tab-head .active').index();
    $('#important .extra-main-cd .tab-content li').each(function(){
      $(this).removeClass('active');
    })
    $('#important .extra-main-cd .tab-content li').eq(index).addClass('active');
  })
}()
!function(){

  var $List = $('#reduce-price .reduce-price-top-things .carousel-list'),
      $firstList = $List.children().first(),
      $lastList = $List.children().last(),
      listIndex = 0,
      isAnimate = false,
      listWidth = $List.find('li').eq(0).width(),
      listNumber = $List.children().length;
  $List.prepend($lastList.clone());
  $List.append($firstList.clone());
  $List.css('width',$List.children().length*listWidth)
  $List.css('margin-left',-listWidth)
  $('#reduce-price .reduce-price-top-things .btn-pre').on('click',function(){
    preList(1);
  })
  $('#reduce-price .reduce-price-top-things .btn-next').on('click',function(){
    nextList(1);
  })    
  function nextList(n){
    if(isAnimate){return};
    isAnimate = true;
    $List.animate({'margin-left':'-='+listWidth*n},function(){
      listIndex += n;
      if (listIndex===3){
        $List.css('margin-left','-1000px');
        listIndex = 0;
      }
      isAnimate = false;
    })
  }
  function preList(n){
    if(isAnimate){return};      
    isAnimate = true;      
    $List.animate({'margin-left':'+='+listWidth*n},function(){
      listIndex -= n;
      if (listIndex<0){
        $List.css('margin-left',-listNumber*listWidth);
        listIndex = listNumber-1;
      }
      isAnimate = false;      
    })
  }   
  $('#reduce-price .carousel').on('mouseenter',function(){
    $('#reduce-price .reduce-price-top-things .btn').css('opacity',0.5)
  }) 
  $('#reduce-price .carousel').on('mouseleave',function(){
    $('#reduce-price .reduce-price-top-things .btn').css('opacity',0)
  }) 
}()
!function(){

  var $imgList = $('#reduce-price .reduce-price-middle-line2-carousel .carousel-list'),
      $firstImg = $imgList.children().first(),
      $lastImg = $imgList.children().last(),
      imgIndex = 0,
      isAnimate = false,
      clicked = false,
      imgNumber = $imgList.children().length;
  $imgList.children('li').not('.show').each(function(){
    $(this).css('z-index',-1)
    $(this).fadeOut();
  })
  $('#reduce-price .reduce-price-middle-line2-carousel .btn-pre').on('click',function(){
    clicked = true;
    preImg(1);
    setTimeout(function(){
      clicked = false;
    },2000)
  })
  $('#reduce-price .reduce-price-middle-line2-carousel .btn-next').on('click',function(){
    clicked = true;
    nextImg(1);
    setTimeout(function(){
      clicked = false;
    },2000)
  })
  setInterval(function(){
    if(!clicked){
      nextImg(1);
    }
  },3000)   
  function nextImg(n){
    if(isAnimate){return};
    isAnimate = true;
    var afterShow;
    var nowShow = $('#reduce-price .reduce-price-middle-line2-carousel li.show').index();
    $imgList.find('li.show').fadeOut();
    $imgList.find('li.show').removeClass('show');
    if(nowShow+n<imgNumber){
      $imgList.children('li').eq(nowShow+n).addClass('show');
      afterShow = nowShow + n;
    }else{
      $imgList.children('li').eq(0).addClass('show');
      afterShow = 0;
    }
    $('#reduce-price .reduce-price-middle-line2-carousel li.show').css('z-index',0)
    $('#reduce-price .reduce-price-middle-line2-carousel li.show').fadeIn(function(){
      isAnimate = false;
    });
    $('#reduce-price .reduce-price-middle-line2-carousel .dotted').children().removeClass('active').eq(afterShow).addClass('active');
  }
  function preImg(n){
    if(isAnimate){return};
    isAnimate = true;
    var afterShow;
    var nowShow = $('#reduce-price .reduce-price-middle-line2-carousel li.show').index();
    $imgList.find('li.show').fadeOut();
    $imgList.find('li.show').removeClass('show');
    if(nowShow-n>=0){
      $imgList.children('li').eq(nowShow-n).addClass('show');
      afterShow = nowShow - n;        
    }else{
      $imgList.children('li').eq(imgNumber-1).addClass('show');
      afterShow = imgNumber-1;
    }
    $('#reduce-price .reduce-price-middle-line2-carousel li.show').css('z-index',0)
    $('#reduce-price .reduce-price-middle-line2-carousel li.show').fadeIn(function(){
      isAnimate = false;
    });
    $('#reduce-price .reduce-price-middle-line2-carousel .dotted').children().removeClass('active').eq(afterShow).addClass('active');
  }   
  $('#reduce-price .reduce-price-middle-line2-carousel .dotted>li').on('click',function(){
    var n = $(this).index()-$('.active').index();
    if(n>0){
      nextImg(n);
    }else if(n<0){
      preImg(-n);
    }
  })
  $('#reduce-price .reduce-price-middle-line2-carousel').on('mouseenter',function(){
    $('#reduce-price .reduce-price-middle-line2-carousel .btn').css('opacity',0.5)
  }) 
  $('#reduce-price .reduce-price-middle-line2-carousel').on('mouseleave',function(){
    $('#reduce-price .reduce-price-middle-line2-carousel .btn').css('opacity',0)
  }) 
}()
!function(){
  $('#reduce-price .reduce-price-middle-line3-tab .tab-head').on('mouseenter','li',function(e){
    $('#reduce-price .reduce-price-middle-line3-tab .tab-head li').each(function(){
      $(this).removeClass('active');
    })
    $(e.target).addClass('active');
    var index = $('#reduce-price .reduce-price-middle-line3-tab .tab-head .active').index();
    $('#reduce-price .reduce-price-middle-line3-tab .tab-content>li').each(function(){
      $(this).removeClass('active');
    })
    $('#reduce-price .reduce-price-middle-line3-tab .tab-content>li').eq(index).addClass('active');
  })
}()