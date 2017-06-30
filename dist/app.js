let app = angular.module('app', ['fs-widgets']);

app.config((FsDataProvider) => {
  FsDataProvider.customerId = 432657;
  FsDataProvider.partnerId = 3;
  FsDataProvider.baseUrl = 'http://analytics.dev';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope) {

}