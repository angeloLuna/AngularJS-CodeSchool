(function(){
  'use strict';

angular.module('gemStore', [])
.controller('StoreController', controller);

var gems = [
    { name: 'Azurite', price: 110.50 },
    { name: 'Bloodstone', price: 22.90 },
    { name: 'Zircon', price: 1100 },
];

function controller(){
    var first = this;
    first.product =gems;
}

})();

