var app = angular.module('myApp', []);

app.controller("MainController" , function($scope){
		$scope.title = "It is working.";
		
});

app.controller('MathController', function($scope) {

      $scope.gross = 0;
      $scope.insurance = 8;
      $scope.cpp = 11;
      // $scope.gender = ['Female' , 'Male'];
      // $scope.dependants = ['2', '3', '4'];
      // $scope.bonus = 250;

      $scope.empInsurance = function() {

       return (Number($scope.gross) * (Number($scope.insurance)/100)) + (Number($scope.gross) * (Number($scope.cpp)/100)); 
      }

      // $scope.cpp = function() {

      // 	return Number($scope.gross * (Number($scope.cpp)/100); 

      // }

  //   $scope.chkVal2 = 'Female';
		// $scope.gender = function(){
		//  alert($scope.chkVal1 + ' ' + $scope.chkVal2);
  //    };

      


      
});
