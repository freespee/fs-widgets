/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { axisChartMappings } from '../../chartMappings';
import { FsData, FsDataResponse } from '../../services/FsData.service';
import { FsSeriesTranslation } from '../../services/FsData.service';
import './bar-chart.styles.scss';

interface ChartResponse {
  labels: string[];
  series: string[];
  data: any[];
  options: any;
}

export abstract class AxisChartWidget {

  protected type: string;
  protected segments: string[] = ['all_data'];
  protected data: ChartResponse = {
    data: [],
    labels: [],
    series: [],
    options: []
  };

  constructor(protected $scope: ng.IScope, protected FsData: FsData) {

  }

protected setResponse(dataset: string, value: FsDataResponse): any {
    let data: any[] = [];
    let labels: string[] = [];
    let series: any[] = [];
    const chartMap = axisChartMappings[dataset];
    if (chartMap === undefined) {
      throw new Error(`Chartmapping missing for ${dataset}`);
    }
    const xAxisColumn = chartMap.columns.find(m => m.xAxis);
    let yAxisColumns: any[] = [];
    chartMap.columns.forEach(column => {
      if (column.xAxis === false) {
        yAxisColumns.push(column);
      }
    });

    value.datasources.forEach(ds => {
       let dataLabels = ds.data
         .sort((a, b) => {
           if (chartMap.sort === false) {
             return -1;
           } else {
             return a.name < b.name ? -1 : 1;
           }
         })
         .map(d => {
           if (d[xAxisColumn.key].length > 15) {
            return d[xAxisColumn.key].substr(0, 18)+'...';
           } else {
             return d[xAxisColumn.key];
           }
         })
         .filter((entry, index, arr) => labels.indexOf(entry) === -1);
       labels.push(...dataLabels);

       const objKeys = Object.keys(ds.data[0]);
       series.push(
          ...objKeys.filter(key => yAxisColumns.find(m => key === m.key)).map((key) => {
             let overrideSerieName = yAxisColumns.find(m => key === m.key).name;
             let serieName = overrideSerieName !== undefined ? overrideSerieName : key;
             return {
               title: `${serieName}`,
               data: ds.data.map((data) => data[key])
             }
          })
       );
    });

    let outputSeries: any[] = [];
    let outputData: any[] = [];
    series.forEach(serie => {
      outputSeries.push(serie.title);
      outputData.push(serie.data);
    });

    this.data = {
      labels,
      data: outputData,
      series: outputSeries.sort((a, b) => a - b),
      options: {
        scales: {
          xAxes: [{gridLines: { display:false }}],
          yAxes: [
            {
              gridLines: { display:false },
              ticks: { beginAtZero: true }
            }
          ],
        }
      }
    };
  }

  async $onInit() {
    let response = await this.FsData.getData(this.type, this.segments, '', '');
    this.setResponse(this.type, response);
    this.$scope.$apply();
  }

  private getAxisData(dataset: string, datasources: string[]) {
    this.data = {
      labels: ['2017-01-01', '2017-01-02'],
      data: ['1', '2'],
      series: ['1'],
      options: {
        scales: {
          xAxes: [{gridLines: { display:false }}],
          yAxes: [{gridLines: { display:false }}],
        }
      },
    };
  }

}