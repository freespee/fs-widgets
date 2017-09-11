export const axisChartMappings = {
  calls_per_day: {
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'Answered',
        xAxis: false,
      },
      {
        key: 'Missed',
        xAxis: false,
      }
    ]
  },
  daily_call_distribution: {
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'Answered',
        xAxis: false,
      },
      {
        key: 'Missed',
        xAxis: false,
      }
    ]
  },
  call_length_distribution: {
      sort: false,
      columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'val',
        xAxis: false,
      }
    ]
  },
  calls_top_attributions: {
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'val',
        xAxis: false,
      }
    ]
  }
};

export const listChartMappings = {
  top_customers_by_calls: {
    columns: [
      {
        key: 'name',
        name: true
      },
      {
        key: 'val',
        name: false
      }
    ]
  },
  geographic_origin: {
    columns: [
      {
        key: 'name',
        name: true
      },
      {
        key: 'val',
        name: false
      }
    ]
  }
};