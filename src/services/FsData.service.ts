import { chartMappings } from './../chartMappings';
import { IHttpPromiseCallbackArg } from "@types/angular";

interface Datasource {
  id: number;
  name: string;
}

interface FsDataResponseDatasource  {
  datasource: number;
  data: any[];
}

interface FsDataResponse {
  dataset: string;
  datasources: FsDataResponseDatasource[];
}

export interface FsSeriesTranslation {
  serieName: string;
  translation: string;
}

export interface ChartResponse {
  labels: string[];
  series: string[];
  data: any[];
}

export interface ToplistData {
  name: string;
  value: string;
}


class FsData implements ng.IServiceProvider {
  _customerId: number;
  _partnerId: number;
  _baseUrl: string = 'https://analytics.freespee.com';
  _datasourceUrl: string = '/api/widgets/datasources?partner_id={{partnerId}}&customer_id={{customerId}}';
  _dataUrl: string = '/api/widgets/datasources/data/{{datasources}}/{{partnerId}}/{{customerId}}'
  _datasources: Datasource[];
  $http: ng.IHttpService;
  $q: ng.IQService;


  set partnerId(partnerId: number) {
      this._partnerId = partnerId;
  }

  set customerId(customerId: number) {
      this._customerId = customerId;
  }

  set baseUrl(baseUrl: string) {
      this._baseUrl = baseUrl;
  }

  set datasourceUrl(url: string) {
    this._datasourceUrl = url;
  }

  set dataUrl(url: string) {
    this._dataUrl = url;
  }

  $get($http: ng.IHttpService, $q: ng.IQService) {
    this.$http = $http;
    this.$q = $q;

    this._dataUrl = this._dataUrl
                      .replace(/{{customerId}}/g, this._customerId.toString())
                      .replace(/{{partnerId}}/g, this._partnerId.toString());
    this._datasourceUrl = this._datasourceUrl
                          .replace(/{{customerId}}/g, this._customerId.toString())
                          .replace(/{{partnerId}}/g, this._partnerId.toString());

    return {
      getDatasources: this.getDatasources.bind(this),
      getData: this.getData.bind(this),
      getListData: this.getListData.bind(this),
    }

  }

  getDatasources(): ng.IPromise<Datasource[]> {
    let deferred = this.$q.defer();
    debugger;

    if(this._datasources !== undefined) {
      deferred.resolve(this._datasources);
    } else {
      this.$http
        .get(`${this._baseUrl}${this._datasourceUrl}`)
        .then((response: IHttpPromiseCallbackArg<Datasource[]>) => {
          this._datasources = <Datasource[]>response.data;
          console.log('resolving');
          deferred.resolve(this._datasources);
        })
        .catch((err: IHttpPromiseCallbackArg<Datasource[]>) => {
          console.log('resolving in catch');
          deferred.reject(err.statusText || 'A error occured while fetching datasources');
        });
    }


    return deferred.promise;
  }

  async getListData (dataset: string, datasources: string[]): Promise<ToplistData[]> {
    let data: ToplistData[] = [
      {name: 'Berlin', value: '20.1%'},
      {name: 'Antwerpen', value: '41.44%'},
      {name: 'Geschulgenhaagen', value: '9.3%'},
      {name: 'Togo', value: '6%'},
    ];

    data = data.sort((a,b) => parseFloat(a.value) > parseFloat(b.value) ? -1 : 1)

    return Promise.resolve(data);
  }

  async getData(dataset: string, datasources: string[], fromDate: string = '', toDate: string = '', translations: FsSeriesTranslation[]): Promise<any> {
    
    let deferred = this.$q.defer();
    let datasourceIds: number[] = [];
    let nonMatchingDatasources: string[] = [];

    let sources = await this.getDatasources();
    datasources.forEach((ds) => {
      let datasourceByName: Datasource  = <Datasource>sources.find(s => s.name.toLowerCase() === (""+ds).toLowerCase());
      if(datasourceByName !== undefined) {
        datasourceIds.push(datasourceByName.id);
      } else {
        nonMatchingDatasources.push(ds);
      }
    })
    

    if(nonMatchingDatasources.length > 0) {
      console.warn(`Couldnt lookup existing datasource id(s) for ${nonMatchingDatasources.join(',')}.`);
    }

    if(datasourceIds.length === 0) {
      datasourceIds.push(0);
    }
    
    let requestUrl = `${this._baseUrl}${this._dataUrl}`.replace(/{{datasources}}/g, datasources.join(','));
    this.$http
      .get(requestUrl)
      .then((response: IHttpPromiseCallbackArg<FsDataResponse>) => {
        let resp = Array.isArray(response.data) ? response.data[0] : response.data; 
        let result = this.transform(dataset, <FsDataResponse>resp, this._datasources, translations);
        deferred.resolve(result);
      })
      .catch((err: IHttpPromiseCallbackArg<Datasource[]>) => {
        deferred.reject(err.statusText || 'A error occured while fetching data');
      });

    return deferred.promise;
  }

  private transform(dataset: string, resp: FsDataResponse, datasources: Datasource[], translations: FsSeriesTranslation[] = []): any {
    let data: any[] = [];
    let labels: string[] = [];
    let series: any[] = [];
    const chartMap = chartMappings[dataset];
    if(chartMap === undefined) {
      throw new Error(`Chartmapping missing for ${dataset}`);
    }
    const xAxisColumn = chartMap.columns.find(m => m.xAxis);

    resp.datasources.forEach( ds => {
      let dataLabels = ds.data
                        .sort((a, b) => a.day < b.day ? -1 : 1)
                        .map(d => d[xAxisColumn.key])
                        .filter((entry, index, arr) => labels.indexOf(entry) === -1);
      labels.push(...dataLabels);
      
      let datasource = <Datasource>datasources.find(systemSource => systemSource.id === ds.datasource);
      const objKeys = Object.keys(ds.data[0]);
      series.push(
        ...objKeys.filter(key => key !== xAxisColumn.key).map((key) => {
              let overrideSerieName = translations.find(tran => tran.serieName === key);
              let serieName = overrideSerieName !== undefined ? overrideSerieName.translation : key;
              return {
                title: datasource.id === 0 ? `${serieName}` : `${serieName} (${datasource.name})`,
                datasource: datasource,
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
    })
    
    return {
      labels,
      data: outputData,
      series: outputSeries.sort((a,b) => a - b),
      options: {
        scales: {
          xAxes: [{gridLines: { display:false }}],
          yAxes: [{gridLines: { display:false }}],
        }
      },
    };

  }

}

export { FsData };