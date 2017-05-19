  var page = 1,
        newsPerPage = 30,
        loading = false;
        arr = [];
  
    function isVisible($node){
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
    showData();
    $(window).on('scroll', function () {
      if(isVisible($('.hidden'))&&!loading){
        loading = true;
        showData();
      }
    })    
    
    
    function showData(){
      $.ajax({
        url: 'http://platform.sina.com.cn/slide/album_tech',
        type: 'get',
        dataType : 'jsonp',
        jsonp : 'jsoncallback',
        data : {
          app_key :'1271687855',
          format : 'json',
          size : 'img',
          num : newsPerPage,
          page : page
        },
        success : function(ret){
          if(ret.status.code==0){
            madeNews(ret.data);
            page++;
          }
        }
      })
      function madeNews(data){
        var html = '';
        for(var i = 0 ; i<data.length;i++){
          html += '<li><a href="'+data[i].url+'"><img src="'+data[i].img_url+'" alt=""></a>'
          html += '<h3>'+ data[i].short_name +'</h3>'
          html += '<p>'+ data[i].short_intro +'</p></li>'
        }
        var $html = $(html);
        $('.news-list').append($html);
        fullwater($html);
      }
    }
    function fullwater($item){
      var min = 0
      if(arr.length==0){
        var arrLength = parseInt($('.layout').width()/$('.news-list>li').outerWidth(true));
        for (var i = 0; i<arrLength; i++){
          arr[i] = 0;
        }
      }
      $item.each(function(){
        var $this = $(this);
        $(this).find('img').on('load',function(){
        var minValue = Math.min.apply(null,arr),
            minIndex = arr.indexOf(minValue);
          $this.css({'top' : minValue,
                      'left': minIndex*$item.outerWidth(true),
                      'opacity' : 1});
          arr[minIndex] += $this.outerHeight(true);
          min = minValue;
          console.log(min);
        $('.hidden').css('top',min);
          
        })
      })
      loading = false;
    }
