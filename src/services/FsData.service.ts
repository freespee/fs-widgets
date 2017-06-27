interface Datasource {
  id: number;
  name: string;
}

class FsData {
  subcustomerId: number;
  customerId: number;

  constructor(
    private $http: ng.IHttpService,
    private $q: ng.IQService
  ) {}

  getDatasources(): ng.IPromise<Datasource[]> {
    console.log(this.subcustomerId);
    const mock: Datasource[] = [
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