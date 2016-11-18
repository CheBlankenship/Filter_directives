var hello = angular.module( "hello", [] );


  hello.directive( "hello", function() {
    return {
      scope: {
        name: '@'
      },
      controller: function($scope) {
        if(!$scope.name){
          $scope.name = 'world';
        }
    },
      template: '<h1>Hello, {{name}}!</h1>'
    };
  });
