<<<<<<< HEAD
let app = angular.module('app', ['fs-widgets', 'chart.js']);
=======
let app = angular.module('app', ['fs-widgets']);

app.config((FsDataProvider) => {
  FsDataProvider.customerId = 3;
  FsDataProvider.subcustomerId = 432657;
  FsDataProvider.baseUrl = 'http://staging.freespee.com/'
});

>>>>>>> fa8a8a59ebfd824aadf07a0f7bd4cf1ee325c45a
app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', 'FsData'];
function MyCtrl($scope, FsData) {
  let data = FsData.logSubCust();
  console.log(data);
}