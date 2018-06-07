app.directive('menuDirective' , function(){
    return {
        restrict:'AE',
        replace : "true" ,
        templateUrl:'../subApp/menu.html'
    };
});