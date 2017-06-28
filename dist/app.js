let app = angular.module('app', ['fs-widgets', 'chart.js']);

app.config((FsDataProvider) => {
  FsDataProvider.customerId = 432657;
  FsDataProvider.partnerId = 3;
  FsDataProvider.baseUrl = 'http://analytics.dev';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', 'FsData'];
function MyCtrl($scope, FsData) {
  FsData
    .getData('calls_per_day', ["Everything"])
    .then(function(data) {
      console.log('fetchec data', data);
    }).catch(function(error) {
      console.error(error);
    });
}