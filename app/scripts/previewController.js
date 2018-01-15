
angular.module('eventRegApp').controller('previewCtrl', ['$scope','$state','$stateParams','$http','eventRegService',
 function ($scope,$state,$stateParams,$http,eventRegService) {
  console.log($stateParams.obj);
  $scope.previewEnteredDetails = {};
  
  $scope.previewEnteredDetails= $stateParams.obj;
  $scope.previewEnteredDetails.id = Math.floor(Math.random() * (10000 - 0));
  $scope.previewEnteredDetails.date = new Date();

  $scope.submitDetails= function(){
    eventRegService.saveEventReg( $scope.previewEnteredDetails) .then(function successCallback(response){
                console.log("Successfully POST-ed data");
                  $state.go('submittedData' , {obj : $scope.previewEnteredDetails});
            }, function errorCallback(response){
                 $state.go('submittedData' , {obj : {'err' : 'Something wrong please try again!!!'}});
                console.log(response);
                console.log("POST-ing of data failed");
            });;
  }


}]);