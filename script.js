var myApp = angular.module('myApp', ['vjs.video']);


myApp.controller("myCtrl", function MyCtrl($scope, $timeout) {

  $scope.command = "Kaleem";

  $scope.$on('vjsVideoReady', function(e, data) {
    $timeout(function() {
      $scope.vid = data.player;

      console.log($scope.vid);


      $scope.commands = {
        'play': function() {
          $scope.command = "playing";
          $scope.vid.play();

        },
        'pause': function() {
          $scope.vid.pause();
          $scope.command = "paused";
        },
        'mute': function() {
          $scope.vid.muted(true);
          $scope.command = "muted";
        },
        'unmute': function() {
          $scope.vid.muted(false);
          $scope.command = "muted";
        },
        "who i am": function() {
          $scope.command = "I'm yapsodian!";
        }
      };

      $scope.ay = annyang;
      $scope.ay.addCommands($scope.commands);
      $scope.ay.debug();
      $scope.ay.start();

    })
  });
});
