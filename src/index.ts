/// <reference path="../node_modules/@types/angular/index.d.ts" />
import 'chart.js/dist/Chart.min.js';
import 'angular-chart.js/dist/angular-chart.min.js';
declare var angular: angular.IAngularStatic;
import { LineChartWidget } from "./components/line-chart.component";
import { FsData } from "./services/FsData.service";

angular
  .module('fs-widgets', [])
  .provider("FsData", [() => {return new FsData()}])
  .run(($http: ng.IHttpService) => {
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  })
  .component('lineChartWidget', LineChartWidget);
