/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { Component } from '../../decorators';
import { FsData, ChartResponse } from '../../services/FsData.service';
import { FsSeriesTranslation } from '../../services/FsData.service';
import './bar-chart.styles.scss';

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
    segments: '<',
    fsTranslations: '<',
  },
  controllerAs: 'vm',
})
export class BarChartWidget {
  
  private type: string;
  private segments: string[] = ['all_data'];
  private fsTranslations: FsSeriesTranslation[] = [];
  private data: ChartResponse = {
    data: [],
    labels: [],
    series: []
  }
  private poop: any[];

  constructor (private $scope, private FsData: FsData) { }

  async $onInit() {
    this.data = await this.FsData.getData(this.type, this.segments, undefined, undefined, this.fsTranslations);
    this.$scope.$apply();
  }

}