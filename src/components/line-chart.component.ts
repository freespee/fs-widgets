/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import { Component } from '../decorators';
import { FsData, ChartResponse } from '../services/FsData.service';
import './line-chart.styles.css';

@Component({
  template: `
    <h3
      ng-bind="vm.title"
    ></h3>
    <canvas
      id="line"
      chart-data="vm.data.data"
      chart-labels="vm.data.labels"
      chart-series="vm.data.series"
      class="chart chart-line"
    ></canvas>
  `,
  bindings: {
    title: '@',
    type: '@',
    segments: '<',
  },
  controllerAs: 'vm',
})
export class LineChartWidget {
  
  private type: string;
  private segments: string[] = ['all_data'];
  private data: ChartResponse = {
    data: [],
    labels: [],
    series: []
  }

  constructor (private $scope, private FsData: FsData) { }

  async $onInit() {
    this.data = await this.FsData.getData(this.type, this.segments);
    this.$scope.$apply();
  }

}