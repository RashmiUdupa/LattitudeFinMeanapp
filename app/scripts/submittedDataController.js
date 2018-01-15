
angular.module('eventRegApp').controller('submittedDataCtrl', ['$scope','$state','$stateParams','$http','eventRegService',
 function ($scope,$state,$stateParams,$http,eventRegService) {
     console.log("inside state change cntrl");
    console.log($stateParams.obj);
    $scope.submittedData = $stateParams.obj;
}]);