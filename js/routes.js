angular.module('kiarash')
	.config(function($routeProvider) {
		$routeProvider
        .when('/home', {
		templateUrl: 'page/home/index.html',
		controller: 'HomeController'
	  })
        .when('/service', {
		templateUrl: 'page/service/index.html',
		 controller: 'ServiceController'
		})
        .when('/lipomatic', {
		templateUrl: 'page/lipomatic/index.html',
		 controller: 'LipomaticController'
		})
        .when('/gallery', {
		templateUrl: 'page/gallery/index.html',
		 controller: 'GalleryController'
		})
        .when('/about', {
		templateUrl: 'page/about/index.html',
		 controller: 'AboutController'
		})
		.when('/bmi', {
		templateUrl: 'page/bmi/index.html',
		 controller: 'BmiController'
		})
        .when('/contact', {
		templateUrl: 'page/contact/index.html',
		 controller: 'ContactController'
		})
        .when('/faq', {
		templateUrl: 'page/faq/index.html',
		 controller: 'FaqController'
		})
        .when('/blog', {
		templateUrl: 'page/blog/index.html',
		 controller: 'BlogController'
		})
        .when('/blogdetail/:id', {
		templateUrl: 'page/blogdetail/index.html',
		 controller: 'BlogdetailController'
		})
        .when('/gallery/1', {
		templateUrl: 'page/gallerydetail/1.html',
		})
        .when('/gallery/2', {
		templateUrl: 'page/gallerydetail/2.html',
		})
        .when('/gallery/3', {
         templateUrl: 'page/gallerydetail/3.html',
		})
        .when('/gallery/4', {
		templateUrl: 'page/gallerydetail/4.html',
		})
        
        
		.otherwise({ redirectTo: '/home' });
});