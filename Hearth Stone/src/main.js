  console.log(111);  
requirejs(['jquery','app/carousel','app/gotop','app/watelfall'],function($,Carousel,Gotop,Watelfall){
  new Carousel($('#welcome .carousel')); 
  new Gotop();
  new Watelfall($('#img .img-list'));
})