angular.module('kiarash')
.controller('LipomaticController', function($scope) {

})
.directive('fancyBox', function (){
		return {
			link: function($scope) {
                $('.icon ,.service_popup').click(function(){
                    page = $(this).attr('page')
                   $.fancybox.open({
                        href : 'page/popupl/'+page+'.html',
                        type : 'iframe',
                        padding : 5
                    });
                });

                /*==========================================*/
                
                 swiper2 = new Swiper('.swiper-container',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
                
               /*==========================================*/
                didi = 1000; 
                $('div[data-role="collapsible"] h4').bind("click",function(){
                    if( didi != $(this).parent().index() )
                    {
                        $('div[data-role="collapsible"] p').slideUp(100);
                        $(this).next('p').slideDown(100);    
                        didi = $(this).parent().index() ;
                   
                    }else{
                        $('div[data-role="collapsible"] p').slideUp(100);
                        didi = 1000 ;
                     }
                   
                 });
                /*==========================================*/
				
		
		
				
				
			},//end link
		}
});