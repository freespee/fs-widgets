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

interface ChartResponse {
  labels: string[];
  series: string[];
  data: [any];
}


class FsData implements ng.IServiceProvider {
  _customerId: number;
  _partnerId: number;
  _baseUrl: string = 'https://analytics.freespee.com';
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

  $get($http: ng.IHttpService, $q: ng.IQService) {
    this.$http = $http;
    this.$q = $q;

    return {
      getDatasources: this.getDatasources.bind(this),
      getData: this.getData.bind(this),
    }

  }

  getDatasources(): ng.IPromise<Datasource[]> {
    let deferred = this.$q.defer();

    if(this._datasources !== undefined) {
      deferred.resolve(this._datasources);
    } else {
      this.$http
        .get(`${this._baseUrl}/be/widgets/datasources?customer_id=${this._customerId}&partner_id=${this._partnerId}`)
        .then((response: IHttpPromiseCallbackArg<Datasource[]>) => {
          this._datasources = <Datasource[]>response.data;
          deferred.resolve(this._datasources);
        })
        .catch((err: IHttpPromiseCallbackArg<Datasource[]>) => {
          deferred.reject(err.statusText || 'A error occured while fetching datasources');
        });
    }

    return deferred.promise;
  }

  async getData(dataset: string, datasources: string[]): Promise<any> {
    debugger;
    let deferred = this.$q.defer();
    let datasourceIds: number[] = [];
    let nonMatchingDatasources: string[] = [];

    let sources = await this.getDatasources(); 
    datasources.forEach((ds) => {
      debugger;
      let datasourceByName: Datasource  = <Datasource>sources.find(s => s.name.toLowerCase() === ds.toLowerCase());
      if(datasourceByName !== null) {
        datasourceIds.push(datasourceByName.id);
      } else {
        nonMatchingDatasources.push(ds);
      }
    })
    

    if(nonMatchingDatasources.length < 0) {
      throw new Error(`Couldnt find a matching datasource for ${nonMatchingDatasources.join(',')}`);
    }

    this.$http
      .get(`${this._baseUrl}/be/widgets/datasources/data?customer_id=${this._customerId}&partner_id=${this._partnerId}&datasources=${datasourceIds.join(',')}`)
      .then((response: IHttpPromiseCallbackArg<FsDataResponse>) => {
        let result = this.transform(dataset, <FsDataResponse>response.data, this._datasources);
        deferred.resolve(result);
      })
      .catch((err: IHttpPromiseCallbackArg<Datasource[]>) => {
        deferred.reject(err.statusText || 'A error occured while fetching data');
      });

    return deferred.promise;
  }

  private transform(dataset: string, resp: FsDataResponse, datasources: Datasource[]): void {
    // let data: any[] = [];
    // let labels: string[] = [];
    // let series: string[] = [];
    // const chartMap = chartMappings[type];
    // const xAxisColumn = chartMap.columns.find((m) => m.xAxis);

    // resp.datasources.forEach((ds) => {
    //   const uniqueLabels = ds.data.map(d => d[xAxisColumn.key]).filter((entry, index, arr) => {
    //     return arr.indexOf(entry) !== index;
    //   });
    //   labels = uniqueLabels;
    // });


    // resp.datasources.forEach((ds, index, array) => {
    //   let serie = <Datasource>datasources.find((systemSource) => systemSource.id === ds.datasource);
    //   let serieSuffix: string = serie.name;

    //   const objKeys = Object.keys(ds.data[0]);
    //   series.push(...objKeys.filter(k => k !== xAxisColumn.name).map((k) => {
    //       return `${k} (${serieSuffix})`;
    //     })
    //   );

    //   debugger;

    //   //answered (Google), answered (Bing)
      

    //   ds.data.map((d) => {
    //     chartMap.columns.forEach((col: any) => {
    //       if(Object.hasOwnProperty(col.key) && col.xAxis === false) {
    //         series.push( )
    //       }
    //     });
    //   });
    // });
    
    // return {
    //   labels,
    //   data: [{}, {}],
    //   series: [], //Answered (segment_name), Missed (segment_name)
    // }

  }

}

export { FsData };