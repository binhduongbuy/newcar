angular.module('kiarash')
.factory('News', function($http){
return {
        all : function(){
            return $http.get("http://www.kiarashclinic.com/admin/jason_app/blog")
        }
        
    }   
});
/*.factory('Video', function($http){
    return {
        all : function(){
            return $http.get("http://www.atriatech.ir/varzesh3/video/news_load/hamidamin1394winner/")
        }
        
    }   
 
})
.factory('Live', function($http){
    return {
        all : function(){
            return $http.get("http://www.atriatech.ir/varzesh3/live/index/hamidamin1394winner/")
        }
        
    }   
 
})
.factory('Lega', function($http){
    return {
        all : function(){
            return $http.get("http://atriatech.ir/varzesh3/lege/index/hamidamin1394winner/")
        }
        
    }   
 
});
*/
