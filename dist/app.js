let app = angular.module('app', ['fs-widgets']);

app.config( FsDataProvider => {
  FsDataProvider.customerId = 300033;
  FsDataProvider.dataUrl = '/data?type={{type}}&customer_id={{customerId}}';
  FsDataProvider.baseUrl = 'http://localhost:3000';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];

function MyCtrl($scope) { }