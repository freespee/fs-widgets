import { Component } from '../decorators';
import './line-chart.styles.css';

@Component({
  template: `Hello World {{vm.type}}`,
  bindings: {
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