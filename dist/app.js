let app = angular.module('app', ['fs-widgets', 'chart.js']);

app.config((FsDataProvider) => {
  FsDataProvider.customerId = 511406;
  FsDataProvider.partnerId = 574;
  FsDataProvider.baseUrl = 'http://analytics.dev';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope) {

}