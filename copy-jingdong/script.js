function Carousel1($ct){
  this.$ct = $ct;
  this.init();
  this.bind();
}
Carousel1.prototype.init = function(){
  this.$imgList = this.$ct.children().first(),
  this.$firstImg = this.$imgList.children().first(),
  this.$lastImg = this.$imgList.children().last(),
  this.imgIndex = 0,
  this.isAnimate = false,
  this.clicked = false,
  this.imgNumber = this.$imgList.children().length;
  this.$imgList.children().not('.show').each(function(){
    $(this).css('z-index',-1)
    $(this).fadeOut();
  })
}
Carousel1.prototype.bind = function(){
  var _this = this;
  this.$ct.find($('.btn-pre')).on('click',function(){
    _this.clicked = true;
    _this.preImg(1);
    setTimeout(function(){
      _this.clicked = false;
    },2000)
  })
  this.$ct.find($('.btn-next')).on('click',function(){
    _this.clicked = true;
    _this.nextImg(1);
    setTimeout(function(){
      _this.clicked = false;
    },2000)
  })
  setInterval(function(){
    if(!_this.clicked){
      _this.nextImg(1);
    }
  },2000)
  this.$ct.find($('.dotted>li')).on('click',function(){
    var n = $(_this).index()-$('.active').index();
    if(n>0){
      _this.nextImg(n);
    }else if(n<0){
      _this.preImg(-n);
    }
  })
  this.$ct.on('mouseenter',function(){
    _this.$ct.find($('.btn')).css('opacity',0.5)
  }) 
  this.$ct.on('mouseleave',function(){
    _this.$ct.find($('.btn')).css('opacity',0)
  }) 
}
Carousel1.prototype.nextImg = function(n){
  var _this = this;  
  if(this.isAnimate){return};
  this.isAnimate = true;
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
  this.$ct.find($('li.show')).fadeIn(function(){
    _this.isAnimate = false;
  });
  this.$ct.find($('.dotted')).children().removeClass('active').eq(afterShow).addClass('active');
}
Carousel1.prototype.preImg = function(n){
  var _this = this;  
  if(this.isAnimate){return};
  this.isAnimate = true;
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
  this.$ct.find($('li.show')).fadeIn(function(){
    _this.isAnimate = false;
  });
  this.$ct.find($('.dotted')).children().removeClass('active').eq(afterShow).addClass('active');
}
function Tab($ct){
  this.$ct = $ct;
  this.bind();
}
Tab.prototype.bind = function(){
  var _this = this;
  this.$ct.find($('.tab-head')).on('mouseenter','li',function(e){
    _this.$ct.find($('.tab-head>li')).each(function(){
      $(this).removeClass('active');
    })
    $(e.target).addClass('active');
    var index = _this.$ct.find($('.tab-head .active')).index();
    _this.$ct.find($('.tab-content>li')).each(function(){
      $(this).removeClass('active');
    })
    _this.$ct.find($('.tab-content>li')).eq(index).addClass('active');
  })
}

new Tab($('#important .extra-main-cd'))
new Tab($('#reduce-price .reduce-price-middle-line3-tab'))
new Carousel1($('#important .carousel'))
new Carousel1($('.reduce-price-middle-line2-carousel'))

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