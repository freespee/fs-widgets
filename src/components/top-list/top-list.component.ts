/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { Component } from '../../decorators';
import { FsData, ToplistData } from '../../services/FsData.service';
import './top-list.styles.scss';

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
          ng-repeat="item in vm.list | limitTo: 4"
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

  constructor (private $scope: ng.IScope, private FsData: FsData) { }

  async $onInit() {
    this.list = await this.FsData.getListData(this.type, this.segments);
    this.$scope.$apply();
  }

}