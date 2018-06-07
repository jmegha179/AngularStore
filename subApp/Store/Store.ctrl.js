app.controller('StoreCtrl', ['$scope', '$rootScope', 'ngService', '$http', function ($scope, $rootScope, ngService, $http) {
  $scope.item = ngService.getList().then(function (response) {
    $scope.item = response.data.fruit;
  })
  $scope.Details = function (x) {
    window.location = 'http://localhost:9009/#!/product?var=' + x;
  }
  $rootScope.qty = 5 ;
  $rootScope.totalAmount = 380;
  $rootScope.counterApple = 0;
  $rootScope.counterGrape = 0;
  $rootScope.counterGrapeFruit = 0;
  $rootScope.counterPinapple = 0;
  $rootScope.counterpapaya = 0;
  $rootScope.totalQuantity = 0;
  $rootScope.applePrize = 0;
  $rootScope.grapePrize = 0;
  $rootScope.grapeFruitPrize = 0;
  $rootScope.papayaPrize = 0;
  $rootScope.pineapplePrize = 0;
  $rootScope.totalPrize = 0;
  $scope.addItemToCart = function (x, inc) {
    $scope.cartDetails = true;
    console.log(x.fruit_name, x.prize);
    $rootScope.photo = x.image;
    $rootScope.itemName = x.fruit_name;
    $rootScope.itemPrize = x.prize;
    switch (x.fruit_name) {
      case "Apple":
        $rootScope.counterApple += inc;
        console.log($rootScope.counterApple);
        $rootScope.applePrize = parseInt(x.prize) * $rootScope.counterApple;
        console.log($rootScope.applePrize);
        break;
      case "Grape":
        $rootScope.counterGrape += inc;
        console.log($rootScope.counterGrape);
        $rootScope.grapePrize = parseInt(x.prize) * $rootScope.counterGrape;
        console.log($rootScope.grapePrize);
        break;
      case "Grapefruit":
        $rootScope.counterGrapeFruit += inc;
        console.log($rootScope.counterGrapeFruit);
        $rootScope.grapeFruitPrize = parseInt(x.prize) * $rootScope.counterGrapeFruit;
        console.log($rootScope.grapeFruitPrize);
        break;
      case "Papaya":
        $rootScope.counterpapaya += inc;
        console.log($rootScope.counterpapaya);
        $rootScope.papayaPrize = parseInt(x.prize) * $rootScope.counterpapaya;
        console.log($rootScope.papayaPrize);
      case "Pineapple":
        $rootScope.counterPinapple += inc;
        console.log($rootScope.counterPinapple);
        $rootScope.pineapplePrize = parseInt(x.prize) * $rootScope.counterPinapple;
        console.log($rootScope.pineapplePrize);
    }
    $rootScope.totalQuantity = $rootScope.counterApple + $rootScope.counterGrape + $rootScope.counterGrapeFruit + $rootScope.counterpapaya + $rootScope.counterPinapple;
    $rootScope.totalPrize = $rootScope.applePrize + $rootScope.grapePrize + $rootScope.grapeFruitPrize + $rootScope.papayaPrize + $rootScope.pineapplePrize;
    console.log($rootScope.totalQuantity);
    console.log($rootScope.totalPrize);
    console.log($rootScope.itemName, $rootScope.itemPrize);
  };
  $scope.removeFruit = function (id , x) {
    console.log(id);
    $http.delete('http://localhost:3000/fruit/' + id, $scope.item).then(function (response) {
      $scope.item = ngService.getList().then(function (response) {
        $scope.item = response.data.fruit;
        console.log($rootScope.qty);
        $rootScope.qty = $rootScope.qty - 1 ;
        $rootScope.totalAmount = $rootScope.totalAmount - parseInt(x);
        console.log( $rootScope.totalAmount );
      })
    });
}
}]);
