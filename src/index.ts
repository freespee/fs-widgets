/// <reference path="../node_modules/@types/angular/index.d.ts" />
declare var angular: angular.IAngularStatic;
import { LineChartWidget } from "./components/line-chart/line-chart.component";
import { BarChartWidget } from "./components/bar-chart/bar-chart.component";
import { TopListWidget } from "./components/top-list/top-list.component";
import { SingleValueWidget } from "./components/single-value/single-value.component";
import { FsData } from "./services/FsData.service";
import { DataLabelTransformer } from "./services/DataLabelTransformer.service";
import { ChartMapping } from "./services/ChartMapping.service";
import { chartMappings } from "./chartMappings";

angular
  .module('fs-widgets', ['chart.js'])
  .constant("ChartMappings", chartMappings)
  .service("ChartMapping", ["ChartMappings", ChartMapping])
  .provider("FsData", [() => new FsData()])
  .service("DataLabelTransformer", [() => new DataLabelTransformer()])
  .run(($http: ng.IHttpService) => $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*')
  .component('fsLineChart', LineChartWidget)
  .component('fsBarChart', BarChartWidget)
  .component('fsTopList', TopListWidget)
  .component('fsSingleValue', SingleValueWidget);