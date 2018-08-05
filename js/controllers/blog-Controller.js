angular.module('kiarash')
.controller('BlogController', function($scope) {
	


                   
})
.directive('blogNews' , ['News' , '$rootScope' , function (News,$rootScope){
        return {
                link: function($scope) {
                       var online = navigator.onLine;
                    
                       
                                if( $rootScope.news != null)
                                {
                                    /*=======================================================================*/
                                    $('.loading_img').show(0);
                                    $scope.news = $rootScope.news ;
                                    $.each( $scope.news, function(index, element)
                                    {
                                        $('.loading_img').hide(0);
                                        var result ='<a href="#/blogdetail/'+element.id+'"';
                                        result +=' class="post">';
                                        result +='<img src="http://www.kiarashclinic.com/admin/uploads/post-small/'+element.picname+'">';
                                        result +='<h4>'+element.title+'</h4>';
                                        result +='<p>'+element.date+'</p>';
                                        result +='</a>';
                                        if((index%2) == 0)
                                            $('.post_bl .setun1').append(result);
                                        else
                                            $('.post_bl .setun2').append(result);

                                     });
                                     /*=======================================================================*/
                                }// $rootScope.datt == 1
                                else{
							if(online == 0){
                              $.fancybox.open("<p>برای مشاهده این قسمت اینترنت گوشی خود را فعال کنید </p><button class='refresh'>تلاش مجدد</button>");
                        }
						   else{
                                     /*===============================================================*/ 
                                       $('.loading_img').show(0);
                                        News.all()
                                        .success(function(data){
                                            console.log(News);

                                            $rootScope.news = data ;
                                            $scope.news = $rootScope.news ;
                                            $.each( $scope.news, function(index, element)
                                                   {
                                                       $('.loading_img').hide(0);
                                                       var result ='<a href="#/blogdetail/'+element.id+'"';
                                                       result +=' class="post">';
                                                       result +='<img src="http://www.kiarashclinic.com/admin/uploads/post-small/'+element.picname+'">';
                                                       result +='<h4>'+element.title+'</h4>';
                                                       result +='<p>'+element.date+'</p>';
                                                       result +='</a>';
                                                        if((index%2) == 0)
                                                           $('.post_bl .setun1').append(result);
                                                       else
                                                           $('.post_bl .setun2').append(result);
                                                   });
                                        });// end success
						}
								}
                              /*===============================================================*/ 
                                    
                              
                        
                     //seda(News,$rootScope);
                    /*==================================================================*/
                       $('.refresh').bind("click",function(){
                           var online = navigator.onLine;
                            
                         
                           if(online){
                               
                               $.fancybox.close();
                                /*===============================================================*/ 
                               $('.loading_img').show(0);
                                News.all()
                                .success(function(data){
                                    console.log(News);

                                    $rootScope.news = data ;
                                    $scope.news = $rootScope.news ;
                                    $.each( $scope.news, function(index, element)
                                           {
                                               $('.loading_img').hide(0);
                                               var result ='<a href="#/blogdetail/'+element.id+'"';
                                               result +=' class="post">';
                                               result +='<img src="http://www.kiarashclinic.com/admin/uploads/post-small/'+element.picname+'">';
                                               result +='<h4>'+element.title+'</h4>';
                                               result +='<p>'+element.date+'</p>';
                                               result +='</a>';
                                                if((index%2) == 0)
                                                    $('.post_bl .setun1').append(result);
                                               else
                                                   $('.post_bl .setun2').append(result);
                                           });
                                });// end success
                               
                              /*===============================================================*/ 
                           }
                           else{
                               $('.refresh').fadeOut(100,function(){ $('.refresh').fadeIn(100)});
                               //$.fancybox.open("<p>برای مشاهده این قسمت اینترنت گوشی خود را فعال کنید </p><button class='refresh'>تلاش مجدد</button>");
                           }
                       });
                    /*==================================================================*/
                    // end success
            },//end link
            templateUrl : "page/blog/blog-news.html"
        }
}]);

function seda(News,$rootScope){

    
}