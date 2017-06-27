/// <reference path="../node_modules/@types/angular/index.d.ts" />
declare var angular: angular.IAngularStatic;
import { LineChartWidget } from "./components/line-chart.component";

angular
  .module('fs-widgets', [])
  .component('lineChartWidget', LineChartWidget);

