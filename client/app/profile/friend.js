angular.module('knapsack.friend', ["ui.router"])
  .controller('FriendController', ['$scope', '$uibModal', 'Contents', '$state', 'Profile', function($scope, $uibModal, Contents, $state, Profile) {

    $scope.user = Profile.friendDisplay.data

    $scope.getUsers = function() {
      console.log('in get users')
      Contents.getUsers()
        .then(function(users) {
          console.log('USERS:', users)
          $scope.users = users
        })
    }
    $scope.processFriend = function(friend) {
      console.log('friend', friend)
      Profile.processFriend(friend).then(function(resp) {
        $state.go('friend', {
          user: JSON.stringify(resp)
        }, {
          location: "replace"
        })
      })
    }

  }])