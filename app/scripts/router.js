angular.module('eventRegApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'registration.html',
            controller: 'eventRegCtrl'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('preview', {
            url: '/preview',
            templateUrl: 'preview.html',
            controller: 'previewCtrl',
            params: {
                obj: null
            }
        })

         .state('submittedData', {
            url: '/submittedData',
            templateUrl: 'submittedData.html',
            controller: 'submittedDataCtrl',
            params: {
                obj: null
            }
        });

});