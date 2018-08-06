is_open= 0;
angular.module('kiarash')
.controller('HomeController', function($scope,$rootScope,News) {

    var online = navigator.onLine;
    if(online){
        News.all()
        .success(function(data){
            $rootScope.news= data;
            $rootScope.datt= 1;
			
		
        });
    }else{
         $rootScope.datt= 0;
    }


})
.directive('swSwipe', [ '$location', function ($location){
		return {
			link: function($scope) {
				
				 window.addEventListener('load', function() {
					new FastClick(document.body);
				}, false);
			   
				
			    var win_height = $(window).height();
				$('.main_100,.nav_main').height(win_height);
                $('.content').height((win_height*80)/100);
                $(window).on("resize",function(){
                   var win_height = $(window).height();
				    $('.main_100,.nav_main').height(win_height); 
                    $('.content').height((win_height*80)/100);
                });
                var mySwiper = new Swiper( '.swiper-container' , { slidesPerView: 'auto',  followFinger : false } );
                
				$(window).on('hashchange', function(e){
                    mySwiper.slidePrev();
                    is_open= 0;
                    
                    mySwiper.on('onTransitionStart', function () {if(is_open==0){is_open = 1;}else{is_open=0;}});
                    $('body').delegate(".fir ","click",function(){ if(is_open==0){mySwiper.slideNext();is_open=1;}else{mySwiper.slidePrev();is_open=0;} });   
				});
				
				
                /*========================================*/
                $(window).on('hashchange', function(e){
                   var loc =  $location.path();
                   loc = loc.replace("/", "");
                   $('.navbar li a').removeClass('active');
                   $('#'+loc).children("a").addClass('active');
				 
		
				 
                });
                
                /*===========================================================*/
                $('.navbar li').on("click",function(){
                    $('.navbar li a').removeClass('active');
                    $(this).children("a").addClass('active');
				
					
					
					
                
                });
			},//end link
		}
}]);

