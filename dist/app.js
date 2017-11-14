let app = angular.module('app', ['fs-widgets']);

app.config( FsDataProvider => {
  FsDataProvider.customerId = 300033;
  FsDataProvider.baseUrl = 'http://localhost:3000';
  FsDataProvider.dataUrl = '/data';
  FsDataProvider.dateFormat = 'YYYY-dd-M';
});

app.controller('FsCtrl', FsCtrl);

function FsCtrl() {
    this.fromDate = '2017-07-01';
    this.toDate = '2017-08-01';
}