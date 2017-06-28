export const chartMappings = {
  calls_per_day: {
    columns: [
      {
        key: 'day',
        xAxis: true
      },
      {
        key: 'answered',
        xAxis: false
      },
      {
        key: 'missed',
        xAxis: false
      }      
    ]
  }
};
