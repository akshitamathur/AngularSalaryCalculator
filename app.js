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
      $scope.bonus = 0;

      $scope.empInsurance = function() {

       return (Number($scope.gross) * (Number($scope.insurance)/100)); 
      }

      $scope.cppDeduction = function(){
        return (Number($scope.gross) * (Number($scope.cpp)/100));
      }  

      $scope.bonusAdd = function(){
        return $scope.bonus;
      }
         
      $scope.incomeTax = function() {
          $scope.percentage = 0;
          
          if ($scope.selectedG == "Female") {
              switch($scope.selectedD) {
                      case "2": $scope.percentage = 0.16;
                        break;
                      case "3": $scope.percentage = 0.15;
                        break;
                      case "4": $scope.percentage = 0.14;
                        break;
              }
          } else {
              switch($scope.selectedD) {
                      case "2": $scope.percentage = 0.18;
                        break;
                      case "3": $scope.percentage = 0.17;
                        break;
                      case "4": $scope.percentage = 0.16;
                        break;
              }
          }
          
          return (Number($scope.gross) * Number($scope.percentage));
        }

        $scope.totalSalary = function(){
          return (Number($scope.gross) - $scope.empInsurance() - $scope.cppDeduction() - $scope.incomeTax() + Number($scope.bonus));
        }

        
});