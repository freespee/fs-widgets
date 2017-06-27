interface Datasource {
  id: number;
  name: string;
}

class FsData implements ng.IServiceProvider {
  _subcustomerId: number;
  _customerId: number;
  _baseUrl: string = 'https://analytics.freespee.com/be/';

  constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

  }

  set subcustomerId(subcustomerId: number) {
      this._subcustomerId = subcustomerId;
  }

  set customerId(customerId: number) {
      this.customerId = customerId;
  }

  set baseUrl(baseUrl: string) {
      this.baseUrl = baseUrl;
  }

  $get() {
    return {
      logSubCust: this.logSubCust,
      getDatasources: this.getDatasources
    }
  }

  logSubCust(): void {
    console.log('the subcust is now', this._subcustomerId);
  }

  getDatasources() : ng.IPromise<Datasource[]> {
    const mock : Datasource[] = [
      {
        id: 1,
        name: 'Lodis'
      },
      {
        id: 2,
        name: 'Janne'
      }
    ];

    return this.$q.resolve(mock);
  }

}

export { FsData };