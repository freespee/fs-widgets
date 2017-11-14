export interface AxisChartMappings {
  [type: String]: ChartMappingModel
}

export interface ChartMappingModel {
  type: String;
  sort: boolean;
  columns: [AxisMapping];
}

export interface AxisMapping {
  key: String;
  xAxis: boolean;
  name: String;
}

class ChartMapping implements ng.IServiceProvider {

  private axisChartMappings: AxisChartMappings;

  constructor(axisChartMappings: AxisChartMappings) {
    this.axisChartMappings = axisChartMappings;
  }

  getMappingForType(type: String): ChartMappingModel {
    return this.axisChartMappings[type];
  }
}

export { ChartMapping };
