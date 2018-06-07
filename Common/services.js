app.service('ngService',['$http' , function($http){
    this.getList = function(){
        var url = "http://localhost:3000/db"
         return $http.get(url);
    }
}]);








