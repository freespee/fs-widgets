let app = angular.module('app', ['fs-widgets']);
app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', 'FsData'];
function MyCtrl($scope, FsData) {
  console.log(FsData.getDatasources());
}