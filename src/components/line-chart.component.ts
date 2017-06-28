import { Component } from '../decorators';
import './line-chart.styles.css';

@Component({
  template: `
    <h3
      ng-bind="vm.title"
    ></h3>
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
  private segments: any[];

  constructor () { }

  $onInit() { }

}