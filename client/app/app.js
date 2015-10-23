angular.module("knapsack", ["ui.router", "ui.bootstrap", "smart-table", "knapsack.services", "knapsack.main","knapsack.auth"])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise("/");

  $stateProvider
    .state("main", {
      url: "/"
      views: {
        "main_lists": {
          templateUrl: "app/main_lists/main.html",
          controller: "MainController"
        },
        "sidebar": {
          templateUrl: "app/sidebar/sidebar.html",
          controller: "SidebarController",
          controllerAs: "sidebar"
        },
        "header": {
          templateUrl: "app/auth/header.html",
          controller: "authController",
        }
      }
    })

}]);