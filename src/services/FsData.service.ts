import { IHttpPromiseCallbackArg } from "@types/angular";

interface Datasource {
  id: number;
  name: string;
}

class FsData implements ng.IServiceProvider {
  _customerId: number;
  _partnerId: number;
  _baseUrl: string = 'https://analytics.freespee.com';
  _datasources: Datasource[];
  $http: ng.IHttpService;
  $q: ng.IQService;


  /* customer id */
  set partnerId(partnerId: number) {
      this._partnerId = partnerId;
  }

  /* subcustomer id */
  set customerId(customerId: number) {
      this.customerId = customerId;
  }

  set baseUrl(baseUrl: string) {
      this.baseUrl = baseUrl;
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

  async getData(type: string, datasources: string[]): ng.IPromise<any> {
    let sources = await this.getDatasources();
    // sources.find((val) => {
    //   return val.name.toLowerCase() === 
    // });

    return this.$q.resolve({ a: '1'});
    
  }

}

export { FsData };