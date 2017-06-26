interface Datasource {
  id: number;
  name: string;
}

class FsData {
  subcustomerId: number;
  customerId: number;

  getDatasources() : Datasource[] {
    return [
      {
        id: 1,
        name: 'Lodis'
      }
    ];
  }

}

export { FsData };