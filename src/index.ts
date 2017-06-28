/// <reference path="../node_modules/@types/angular/index.d.ts" />
import 'chart.js/dist/Chart.min.js';
import 'angular-chart.js/dist/angular-chart.min.js';
declare var angular: angular.IAngularStatic;
import { LineChartWidget } from "./components/line-chart.component";

angular
  .module('fs-widgets', [])
  .component('lineChartWidget', LineChartWidget);
