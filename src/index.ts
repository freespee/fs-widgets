/// <reference path="../node_modules/@types/angular/index.d.ts" />
declare var angular: angular.IAngularStatic;
import { LineChartWidget } from "./components/line-chart.component";
import { FsData } from "./services/FsData.service";

angular
  .module('fs-widgets', [])
  .provider("FsData", [() => {return new FsData()}])
  .component('lineChartWidget', LineChartWidget);

