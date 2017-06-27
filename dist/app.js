let app = angular.module('app', ['fs-widgets']);
app.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', 'FsData'];
async function MyCtrl($scope, FsData) {
  let data = await FsData.getDatasources();
  console.log(data);
}