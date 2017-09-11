/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { listChartMappings } from '../../chartMappings';
import { Component } from '../../decorators';
import { FsData, FsDataResponse } from '../../services/FsData.service';
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
        <th>Name</th>
        <th>Value</th>
      </thead>
      <tbody>
        <tr
          ng-repeat="item in vm.list | orderBy:'value':true | limitTo: 4"
        >
          <td ng-bind="item.name"></td>
          <td ng-bind="item.value"></td>
        </tr>
      </tbody>
    </table>
  `,
  bindings: {
    title: '@',
    type: '@',
    segments: '<',
  },
  controllerAs: 'vm',
})
export class TopListWidget {

  private type: string;
  private segments: string[] = ['all_data'];
  private list: ToplistData[] = [];

  constructor (private $scope: ng.IScope, private FsData: FsData) {

  }

  private setResponse(dataset: string, value: FsDataResponse): any {
    let data: any[] = [];
    const chartMap = listChartMappings[dataset];
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

  async $onInit() {
    let response = await this.FsData.getData(this.type, this.segments, '', '');
    this.setResponse(this.type, response);
    this.$scope.$apply();
  }

}