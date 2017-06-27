import { Component } from '../decorators';
import './line-chart.styles.css';

@Component({
  template: `Hello World {{vm.title}}`,
  bindings: {
    type: '<',
    segments: '<',
  },
  controllerAs: 'vm',
})
export class LineChartWidget {
  
  private title: string = 'hello from title before con';

  constructor () {

  }

}