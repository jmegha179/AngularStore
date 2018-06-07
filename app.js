var app = angular.module("myApp", ['ui.router', 'ngAria','ngAnimate'])
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('store', {
      url: "/",
      templateUrl: "subApp/Store/store.html",
      controller: "StoreCtrl"
    })
    .state('product', {
      url: "/product",
      templateUrl: "subApp/productDetail/productDetail.html",
      controller: "ProductCtrl"
    })
    .state('ShoppingCart', {
      url: "/ShoppingCart",
      templateUrl: "subApp/Checkout/checkout.html",
      controller: "CheckoutCtrl"
    });
});
