/// <reference path="../node_modules/@types/angular/index.d.ts" />
declare var angular: angular.IAngularStatic;
import { LineChartWidget } from "./components/line-chart/line-chart.component";
import { BarChartWidget } from "./components/bar-chart/bar-chart.component";
import { TopListWidget } from "./components/top-list/top-list.component";
import { FsData } from "./services/FsData.service";

angular
  .module('fs-widgets', ['chart.js'])
  .provider("FsData", [() => new FsData()])
  .run(($http: ng.IHttpService) => $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*')
  .component('fsLineChart', LineChartWidget)
  .component('fsBarChart', BarChartWidget)
  .component('fsTopList', TopListWidget);