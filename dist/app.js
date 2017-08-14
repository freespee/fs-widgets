let app = angular.module('app', ['fs-widgets']);

app.config( FsDataProvider => {
  FsDataProvider.customerId = 432657;
  FsDataProvider.partnerId = 3;
  FsDataProvider.datasourceUrl = '/be/widgets/datasources?customer_id={{customerId}}&partner_id={{partnerId}}';
  FsDataProvider.dataUrl = '/be/widgets/datasources/data?partner_id={{partnerId}}&customer_id={{customerId}}';
  FsDataProvider.baseUrl = 'http://localhost:3000';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope) { }