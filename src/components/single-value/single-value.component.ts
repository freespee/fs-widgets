/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { Component } from '../../decorators';
import { FsData, FsDataResponse } from '../../services/FsData.service';
import './single-value.styles.scss';

@Component({
  template: `
    <h3
      ng-bind="vm.title"
      ng-click="swap()"
    ></h3>
    <span class="__fs-single-value-value" ng-bind="vm.value"></span>
  `,
  bindings: {
    title: '@',
    type: '@',
    segment: '@',
    suffix: '@',
    fromDate: '@',
    toDate: '@'
  },
  controllerAs: 'vm',
})
export class SingleValueWidget {
  
  private type: string;
  private segments: string[] = ['all_data'];
  private value: any;
  private suffix: string;
  private fromDate: string;
  private toDate: string;

  constructor (private $scope: angular.IScope, private FsData: FsData) { 

  }

  private setResponse(value: FsDataResponse): any {
    let data = value.datasources[0].data;
    if(this.suffix) {
      this.value = `${data} ${this.suffix}`;
    } else {
      this.value = data
    }
  }

  async $onChanges() {
    let response = await this.FsData.getData(this.type, this.segments, this.fromDate, this.toDate);
    this.setResponse(response);
    this.$scope.$apply();
  }

  private getSingleValue(dataset: string, datasources: string[]) {
    this.value = '1100 calls';
  }

}