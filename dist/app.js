let app = angular.module('app', ['fs-widgets']);

app.config( FsDataProvider => {
  FsDataProvider.customerId = 432657;
  FsDataProvider.partnerId = 3;
  FsDataProvider.datasourceUrl = '/api/widgets/datasources?partner_id={{partnerId}}&customer_id={{customerId}}';
  FsDataProvider.dataUrl = '/api/widgets/content?type={{type}}&customer_id={{customerId}}';
  FsDataProvider.baseUrl = 'https://analytics.freespee.com';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope) { }