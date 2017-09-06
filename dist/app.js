let app = angular.module('app', ['fs-widgets']);

app.config( FsDataProvider => {
  FsDataProvider.customerId = 432657;
  FsDataProvider.partnerId = 3;
  FsDataProvider.datasourceUrl = '/datasources';
  FsDataProvider.dataUrl = '/datasources/data';
  FsDataProvider.baseUrl = 'http://localhost:3000';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope) { }