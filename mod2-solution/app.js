(function(){
	'use strict';
 angular.module('ShoppingListCheckOff',[])
 .controller('ToBuyController',ToBuyController)
 .controller('AlreadyBoughtController',AlreadyBoughtController)
 .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

 ToBuyController.$inject=['ShoppingListCheckOffService'];
 function ToBuyController (ShoppingListCheckOffService){
 	var toBuy=this ;
 	toBuy.items=ShoppingListCheckOffService.getbuyarray();
 	toBuy.remove=function(indexOf){
 		ShoppingListCheckOffService.removeitem(indexOf);
 	};
 }

 AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
 function AlreadyBoughtController (ShoppingListCheckOffService){
 	var alreadyBought=this;
 	alreadyBought.items=ShoppingListCheckOffService.getboughtarray();

 }

 function ShoppingListCheckOffService(){
 	var service=this;
 	var items=[{name: 'cookie',quantity: 5},
 		   {name: 'chips' ,quantity: 10},
 		   {name: 'milk' ,quantity: 3},
 		   {name: 'cake' ,quantity: 1},
 		   {name: 'bread' ,quantity: 2}
 	];
 	var bought=[];
 	service.removeitem=function(indexOf){
 		bought.push(items[indexOf]);
 		items.splice(indexOf,1);
	};
    service.getbuyarray=function(){
    	return items;
    };
    service.getboughtarray=function(){
    	return bought;
    };
    
 }
})();