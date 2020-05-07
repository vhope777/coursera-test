(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
   $scope.checkMethod = function(){
   	 var number = countmyText($scope.myText);
   	 $scope.message= messageGenerater(number);
   };

   function countmyText(myText){
   	var arr = myText.split(",");
   	var count=0;
   	for (var i=0 ,i<arr.length ,i++){
   		if (arr[i]==" ")
   			count
   		else 
   			count++
   	}
   	return count ;
   }

   function messageGenerater(number){
  		if (number == 0){
  			return "Please enter data first"
  		}
  		else if (number > 3){
  			return "To much!"
  		}
  		else
  			return "Enjoy"
   }
};

})();