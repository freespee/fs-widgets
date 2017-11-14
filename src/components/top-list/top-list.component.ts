/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { listChartMappings } from '../../chartMappings';
import { Component } from '../../decorators';
import { FsData, FsDataResponse } from '../../services/FsData.service';
import { ChartMapping } from "../../services/ChartMapping.service";
import './top-list.styles.scss';

interface ToplistData {
  name: string;
  value: string;
}

@Component({
  template: `
    <h3>{{vm.title}}</h3>
    <table cell-spacing="0" cell-padding="0">
      <thead>
        <th>{{vm.keyTitle}}</th>
        <th>{{vm.valueTitle}}</th>
      </thead>
      <tbody>
        <tr
          ng-repeat="item in vm.list | orderBy:'value':true | limitTo: vm.limit"
        >
          <td ng-bind="item.name"></td>
          <td ng-bind="item.value"></td>
        </tr>
      </tbody>
    </table>
  `,
  bindings: {
    title: '@',
    keyTitle: '@',
    valueTitle: '@',
    limit: '@',
    type: '@',
    segments: '<',
    fromDate: '@',
    toDate: '@'
  },
  controllerAs: 'vm',
})
export class TopListWidget {

  private type: string;
  private segments: string[] = ['all_data'];
  private list: ToplistData[] = [];
  private fromDate: string;
  private toDate: string;

  constructor (
      private $scope: ng.IScope,
      private FsData: FsData,
      private ChartMapping: ChartMapping
  ) {}

  private setResponse(dataset: string, value: FsDataResponse): any {
    let data: any[] = [];
    const chartMap = this.ChartMapping.getMappingForType(dataset);
    if (chartMap === undefined) {
      throw new Error(`Chartmapping missing for ${dataset}`);
    }
    const nameColumn = chartMap.columns.find(m => m.name);
    const valueColumn = chartMap.columns.find(m => !m.name);

    value.datasources.forEach(ds => {
      let dataEntries = ds.data
        .filter((entry, index, arr) => data.indexOf(entry) === -1);
      data.push(...dataEntries);
    });

    let outputList: any[] = [];
    data.forEach(serie => {
      outputList.push({'name': serie[nameColumn.key], 'value': +serie[valueColumn.key]});
    });

    this.list = outputList.sort((a, b) => a - b)
  }

  async $onChanges() {
    let response = await this.FsData.getData(this.type, this.segments, this.fromDate, this.toDate);
    this.setResponse(this.type, response);
    this.$scope.$apply();
  }

}