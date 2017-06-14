define(['jquery'],function($){
  function Waterfall($ct){
    this.$ct = $ct;
    this.init();
    this.place()
    if(this.$ct.find('.more')){
      this.placemore();
    }
  }
  Waterfall.prototype.init = function(){
    this.arrLength = parseInt(this.$ct.width()/this.$ct.find('img').outerWidth(true));
    this.arr = [];
    for (var i = 0; i<this.arrLength; i++){
      this.arr[i] = 0;
    }
  }
  Waterfall.prototype.place = function(){
    var _this = this;
    this.$ct.find('img').each(function(){
      var minValue = Math.min.apply(null,_this.arr),
          minIndex = _this.arr.indexOf(minValue);
      $(this).css({'top' : minValue,
                  'left': minIndex*_this.$ct.find('img').outerWidth(true)});
      _this.arr[minIndex] += $(this).outerHeight(true);
    })
  }
  Waterfall.prototype.placemore = function(){
    console.log(555);
    var maxValue = Math.max.apply(null,this.arr)+30;
    this.$ct.find('.more').css('margin-top',maxValue);
  }
  return Waterfall;
})

