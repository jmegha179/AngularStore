app.controller('ProductCtrl', ['$scope', 'ngService', '$location', function ($scope, ngService, $location) {
    $scope.name = ngService.getList().then(function (response) {
        $scope.name = response.data.fruit;
        $scope.product = response.data.product_details;
        console.log($scope.name);
        $scope.index = $location.absUrl().substring($location.absUrl().length - 1);
        var colour = $scope.product[3];
        for (var i = 0; i < 4; i++) {
            if (colour.rating[i] == "low") {
                var myEl = angular.element(document.querySelector('.dot'));
                console.log(myEl);
                myEl.css('color', 'red');
            }
        }
    })
}]);
