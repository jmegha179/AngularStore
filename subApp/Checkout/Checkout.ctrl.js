app.controller('CheckoutCtrl', ['$scope', 'ngService', '$location', '$rootScope', function ($scope, ngService, $location, $rootScope) {
    $scope.name = ngService.getList().then(function (response) {
        $scope.fruits = response.data.fruit;
        $scope.products = response.data.product_details;
    })
   
}])
