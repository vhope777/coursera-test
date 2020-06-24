(function (){
'use strict';

angular.module('ShoppingList',[])
.controller('ShoppingListController',ShoppingListController)
.service('ShoppingListService',ShoppingListService);

ShoppingListController.$inject=['ShoppingListService'];
function ShoppingListController (ShoppingListService){

  var List = this;

  List.itemName = ShoppingListService.listnames();

  List.itemShift = function(itemIndex){

  	ShoppingListService.shiftValues(itemIndex);
  }

  List.shiftedValue = ShoppingListService.getvalue();

  List.itemremove = function(indexIndex2){
  	ShoppingListService.removevalue(indexIndex2);
  }
}

function ShoppingListService (){
	var service = this ;

	var bought = [];

	var items = [
			{'name': 'milk',
			 'quantity': '3 L'},
			{'name': 'butter',
			 'quantity': '200 mg'},
			{'name': 'chips',
			 'quantity': '3 packs'}
		];

	service.listnames = function (){

		return items ;
	}

	service.shiftValues = function(itemIndex){

		bought.push(items[itemIndex]);
		items.splice(itemIndex, 1);

	}

	service.getvalue = function(){
       
       return bought;
	}

	service.removevalue = function (indexIndex2){
		
		items.push(bought[indexIndex2]);
		bought.splice(indexIndex2, 1);

	}
}




} )();