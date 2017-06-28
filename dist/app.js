let app = angular.module('app', ['fs-widgets', 'chart.js']);

// app.config( FsDataProvider => {
//   FsDataProvider.customerId = 3;
//   FsDataProvider.subcustomerId = 432657;
//   FsDataProvider.baseUrl = 'http://staging.freespee.com/'
// });

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', 'FsData'];
function MyCtrl($scope, FsData) {
}