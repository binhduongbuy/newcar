angular.module('kiarash')
.controller('BlogdetailController', function($scope,$rootScope,$routeParams,$filter,$sce) {
    
       $scope.detail = $filter('filter')($rootScope.news, {id:$routeParams.id});
        console.log( $scope.detail);
       $scope.description = $sce.trustAsHtml($scope.detail[0].description);
       $scope.title = $sce.trustAsHtml($scope.detail[0].title);
    
})