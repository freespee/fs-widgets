/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { AxisChartWidget } from '../axisChart/axis-chart.component';
import { Component } from '../../decorators';
import { FsData } from '../../services/FsData.service';
import { DataLabelTransformer } from "../../services/DataLabelTransformer.service";
import '../axisChart/bar-chart.styles.scss';

@Component({
  template: `
    <h3
      ng-bind="vm.title"
      ng-click="swap()"
    ></h3>
    <canvas
      chart-data="vm.data.data"
      chart-labels="vm.data.labels"
      chart-series="vm.data.series"
      chart-options="vm.data.options"
      chart-colors="['#ff6600', '#777333']"
      class="chart-bar"
    ></canvas-line>
  `,
  bindings: {
    title: '@',
    type: '@',
    fromDate: '@',
    toDate: '@',
    segments: '<',
    fsTranslations: '<'
  },
  controllerAs: 'vm',
})
export class BarChartWidget extends AxisChartWidget {

  constructor(
      protected $scope: ng.IScope,
      protected FsData: FsData,
      protected DataLabelTransformer: DataLabelTransformer
  ) {
    super($scope, FsData, DataLabelTransformer);
  }

}