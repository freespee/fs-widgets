let app = angular.module('app', ['fs-widgets']);

app.config( FsDataProvider => {
  FsDataProvider.customerId = 300033;
  FsDataProvider.fromDate = '2017-07-01';
  FsDataProvider.toDate = '2017-08-01';
  FsDataProvider.dataUrl = '/data?type={{type}}&customer_id={{customerId}}&from_date={{fromDate}}&to_date={{toDate}}';
  FsDataProvider.baseUrl = 'http://localhost:3000';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];

function MyCtrl($scope) { }