// This class is just a placeholder
// You can replace it with your own service if you need to
class DataLabelTransformer implements ng.IServiceProvider {
  transform(seriesName): string {
    return seriesName;
  }
}

export { DataLabelTransformer };
