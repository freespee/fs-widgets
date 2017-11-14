export const chartMappings = {
  calls_per_day: {
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'Answered',
        xAxis: false,
        name: "Answered Calls"
      },
      {
        key: 'Missed',
        xAxis: false,
        name: "Missed Calls"
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
        name: 'Calls',
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
        name: 'Calls',
        xAxis: false,
      }
    ]
  },
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
