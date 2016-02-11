var app = angular.module('myApp', []);

app.controller("MainController" , function($scope){
    $scope.title = "It is working.";
    
});

app.controller('MathController', function($scope) {

      $scope.gross = 0;
      $scope.insurance = 8;
      $scope.cpp = 11;
      $scope.genders = ['Female' , 'Male'];
      $scope.selectedG = $scope.genders[0];
      $scope.dependants = ['2', '3', '4'];
      $scope.selectedD = $scope.dependants[0];
      $scope.bonus = 250;

      $scope.empInsurance = function() {

       return (Number($scope.gross) * (Number($scope.insurance)/100)); 
      }

      $scope.cppDeduction = function(){
        return (Number($scope.gross) * (Number($scope.cpp)/100));
      }  

      $scope.bonusAdd = function(){
        return $scope.bonus;
      }

      // $scope.totalSoFar = function(){
      //   return (Number($scope.gross)  * (Number($scope.insurance)/100)) - (Number($scope.gross) * (Number($scope.cpp)/100)) + (Number($scope.bonus));
      // }

      // $scope.SwitchFunction = function(selectedG, selectedD){
      //   var $scope.percentage;
      //   if(selectedG = "Female"){
      //     switch(selectedD){
      //       case 2: $scope.percentage = 0.16;
      //         break;
      //       case 3: $scope.percentage = 0.15;
      //         break;
      //       case 4: $scope.percentage = 0.14;
      //         break;
      //   }else if(selectedG = "Male"){
      //     switch(selectedD){
      //       case 2: $scope.percentage = 0.18;
      //         break;
      //       case 3: $scope.percentage = 0.17;
      //         break;
      //       case 4: $scope.percentage = 0.16;
      //         break;
      //   }
      // }
      // var $scope.income = ($scope.gross * $scope.percentage); 
      //   return $scope.income;

      // $scope.maletwo = function(){
      //   return (Number($scope.gross) * (0.18));
      // }
      // $scope.malethree = function(){
      //   return (Number($scope.gross) * (0.17));
      // }
      // $scope.malefour = function(){
      //   return (Number($scope.gross) * (0.17));
      // }

  // $scope.calculateTotal = function() {
  //         var percentage;
          
  //         if ($scope.selectedG == "F") {
  //             switch($scope.selectedD) {
  //                     case 2: percentage = 0.16;
  //                       break;
  //                     case 3: percentage = 0.15;
  //                       break;
  //                     case 4: percentage = 0.14;
  //                       break;
  //             }
  //         } else {
  //             switch($scope.selectedD) {
  //                     case 2: percentage = 0.18;
  //                       break;
  //                     case 3: percentage = 0.17;
  //                       break;
  //                     case 4: percentage = 0.16;
  //                       break;
  //             }
  //         }
          
  //         return (Number($scope.gross) * Number(percentage));
  //     }
        
});