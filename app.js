(function(){
  'use strict';

angular.module('gemStore', [])
.controller('StoreController', controller);

var gem = {
    name: 'Azurite', 
    price: 2.95,
    canPurchase:true,
    soldOut: true, };

function controller(){
    var first = this;
    first.product =gem;
}

})();

