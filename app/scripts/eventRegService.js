angular.module('eventRegApp').service('eventRegService', function ($http) {
    this.saveEventReg = function (obj) {
       return  $http.post("http://localhost:3000/registerEvent", obj)
           
    }
});