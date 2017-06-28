let app = angular.module('app', ['fs-widgets', 'chart.js']);

<<<<<<< HEAD
// app.config( FsDataProvider => {
//   FsDataProvider.customerId = 3;
//   FsDataProvider.subcustomerId = 432657;
//   FsDataProvider.baseUrl = 'http://staging.freespee.com/'
// });
=======
app.config((FsDataProvider) => {
  debugger;
  FsDataProvider.customerId = 432657;
  FsDataProvider.partnerId = 3;
  FsDataProvider.baseUrl = 'http://analytics.dev';
});
>>>>>>> 7aa1e593bbeef0991400b5d9f0dad6304cc0f9f0

app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', 'FsData'];
function MyCtrl($scope, FsData) {
<<<<<<< HEAD
=======
  FsData.getData('calls_per_day', [0])
    .then(function(data) {
      debugger;
    }).catch(function(error) {
      debugger;
    });
>>>>>>> 7aa1e593bbeef0991400b5d9f0dad6304cc0f9f0
}