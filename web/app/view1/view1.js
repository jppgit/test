'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product-list', {
    templateUrl: 'view1/view1.html',
    controller: 'ProductListCtrl'
  });
}])

.controller('ProductListCtrl', ['$scope','$http', function($scope,$http) {

	$scope.model = {
		searchText : "",
		listOrderASC: true,
		propertySelected:""
	}



	$scope.loadData = function(){
		 $http.get("http://localhost:3000/products").then(function (response) {
		 	if(response.data.products){
		 		$scope.productListData = response.data.products;	
		 	}else{
		 		console.log("no data property");
		 	}
	        
	    });
	}

	$scope.orderBy = function(propertySelected) {
    	$scope.model.listOrderASC = ($scope.model.propertySelected === propertySelected) ? !$scope.model.listOrderASC : false;
    	$scope.model.propertySelected  = propertySelected;
  	};

	$scope.loadData();


}]);