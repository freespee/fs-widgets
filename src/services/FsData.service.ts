import { IHttpResponse } from "@types/angular";
import { axisChartMappings } from '../chartMappings';

export interface Datasource {
  datasource: number;
  name: string;
}

interface FsDataResponseDatasource  {
  datasource: number;
  data: any[];
}

export interface FsDataResponse {
  dataset: string;
  datasources: FsDataResponseDatasource[];
}

export interface FsSeriesTranslation {
  serieName: string;
  translation: string;
}

class FsData implements ng.IServiceProvider {
  _customerId: number = 0;
  _baseUrl: string = 'https://analytics.freespee.com';
  _datasourceUrl: string = '/api/widgets/datasources';
  _dataUrl: string = '/api/widgets/data';
  _dateFormat: string = 'YYYY-MM-DD';
  _datasources: Datasource[];
  $http: ng.IHttpService;
  $q: ng.IQService;

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

  set dateFormat(dateFormat: string) {
    this._dateFormat = dateFormat;
  }

  $get($http: ng.IHttpService, $q: ng.IQService) {
    this.$http = $http;
    this.$q = $q;

    return {
      getDatasources: this.getDatasources.bind(this),
      getData: this.getData.bind(this)
    }
  }

  getDatasources(): Datasource[] {
    // let deferred = this.$q.defer();

    // if (this._datasources !== undefined) {
    //   deferred.resolve(this._datasources);
    // } else {
    //   this.$http
    //     .get(`${this._baseUrl}${this._datasourceUrl}`)
    //     .then((response: IHttpPromiseCallbackArg<Datasource[]>) => {
    //       this._datasources = <Datasource[]>response.data;
    //       deferred.resolve(this._datasources);
    //     })
    //     .catch((err: IHttpPromiseCallbackArg<Datasource[]>) => {
    //       deferred.reject(err.statusText || 'A error occured while fetching datasources');
    //     });
    // }

    // return deferred.promise;

    //return this for now as datasources/segmenting filter isn't supported yet
    return [{"datasource":0,"name":"Everything"}];
  }

  parse(resp: FsDataResponse): void {
    const datasetChartMapping = axisChartMappings[resp.dataset];
    const hasParserFunc =  datasetChartMapping && datasetChartMapping.hasOwnProperty('parse');
    if (hasParserFunc) {
      resp.datasources.forEach(datasource => datasource.data.forEach(data => {
        datasetChartMapping.parse.apply(data, [{ dateFormat: this._dateFormat }])
      }))
    }
  }

  async getData(dataset: string, datasources: string[], fromDate: string, toDate: string): Promise<any> {
    let deferred = this.$q.defer();
    let datasourceIds: number[] = [];
    let nonMatchingDatasources: string[] = [];

    let sources = await this.getDatasources();
    sources.forEach((ds) => {
      let datasourceByName: Datasource = <Datasource>sources.find(s => s.name.toLowerCase() === (ds.name).toLowerCase());
      if (datasourceByName !== undefined) {
        datasourceIds.push(datasourceByName.datasource);
      } else {
        nonMatchingDatasources.push(ds.name);
      }
    });

    if (nonMatchingDatasources.length > 0) {
      console.warn(`Couldnt lookup existing datasource id(s) for ${nonMatchingDatasources.join(',')}.`);
    }

    if (datasourceIds.length === 0) {
      datasourceIds.push(0);
    }

    var dataUrl = this._baseUrl + this._dataUrl;
    var config = {
      params: {
        "customer_id": this._customerId,
        "datasources": datasourceIds.join(','),
        "type": dataset,
        "from_date": fromDate || null,
        "to_date": toDate || null,
      }
    };

    this.$http
      .get(dataUrl, config)
      .then((response: IHttpResponse<FsDataResponse>) => {
        let resp = Array.isArray(response.data) ? response.data[0] : response.data;
        this.parse(resp)
        deferred.resolve(resp);
      })
      .catch((err: IHttpResponse<Datasource[]>) => {
        deferred.reject(err.statusText || 'A error occured while fetching data');
      });

    return deferred.promise;
  }
}

export { FsData };