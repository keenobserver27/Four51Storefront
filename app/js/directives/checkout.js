four51.app.directive('lineitemgrid', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/controls/lineItemGrid.html',
        controller: 'LineItemGridCtrl'
    };
    return obj;
});

four51.app.directive('paymentselector', function() {
   var obj = {
       restrict: 'E',
       templateUrl: 'partials/controls/paymentSelection.html',
       controller: function($scope, $rootScope) {
           $scope.setPaymentMethod = function(type) {
               $scope.currentOrder.PaymentMethod = type;
               $rootScope.$broadcast('event:paymentMethodChange', type);
           };
       }
   }
   return obj;
});