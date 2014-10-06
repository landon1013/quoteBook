var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

    $scope.hideAdd = function() {
        $scope.addAppear = !$scope.addAppear;
        if($scope.addAppear) {
            $scope.removeAppear = false;
            $scope.searchAppear = false;
        }
    };

    $scope.hideRemove = function() {
        if($scope.removeAppear) {
            $scope.addAppear = false;
            $scope.searchAppear = false;
        }
    };

    $scope.hideSearch = function() {
        if($scope.searchAppear) {
            $scope.addAppear = false;
            $scope.removeAppear = false;
        }
    };

    $scope.addData = function(){
        dataService.addData($scope.addQuoteText, $scope.addAuthorText);
        $scope.addQuoteText = "";
        $scope.addAuthorText = "";
        getData();
    };

    $scope.removeData = function(){
        dataService.removeData($scope.removeQuote);
        $scope.removeQuote = "";
    };

    var getData = function(){
        $scope.quotes = dataService.getData();
    };

    getData();

});