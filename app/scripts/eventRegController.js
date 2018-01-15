angular.module('eventRegApp').controller('eventRegCtrl', ['$scope', '$state', function ($scope, $state) {

  $scope.eventRegObj = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    image: '',
    type: '',
    noofticket: ''
  };
  $scope.image = {};
  $scope.submitEventRegForm = function () {
    console.log($scope.eventRegObj);
    console.log("checking for the image... "); console.log($scope.image);
    $state.go('preview', { obj: $scope.eventRegObj });
  }

  $scope.checkSelf = function () {
    if ($scope.eventRegObj.type == 'Self') {
      $scope.eventRegObj.noofticket = 1;
    } else {
      $scope.eventRegObj.noofticket = '';
    }

  }


}]);

angular.module('eventRegApp').directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;
      element.bind('change', function () {
        scope.$apply(function () {
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
}]);