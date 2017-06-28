let app = angular.module('app', ['fs-widgets']);

app.config((FsDataProvider) => {
  debugger;
  FsDataProvider.customerId = 432657;
  FsDataProvider.partnerId = 3;
  FsDataProvider.baseUrl = 'http://analytics.dev';
});

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', 'FsData'];
function MyCtrl($scope, FsData) {
  FsData.getData('calls_per_day', [0])
    .then(function(data) {
      debugger;
    }).catch(function(error) {
      debugger;
    });
}