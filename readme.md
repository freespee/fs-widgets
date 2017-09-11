# fs-widgets
## A collection of widgets for displaying data from the Freespee platform.

### Get started

#### 1. Install
```bash
npm install fs-widgets
```

 Or clone via git and use dist/index.js

```bash
git clone https://github.com/freespee/fs-widgets
```




#### 2. Include dependencies and add module as dependency

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script src="/node_modules/Chart.min.js"></script>
<script src="/node_modules/angular-chart.min.js"></script>
```

```javascript
let app = angular.module('app', ['fs-widgets']);
````


#### 3. Configure your Freespee account
Add your subcustomer ID and customer ID to the FsDataProvider
```javascript
let app = angular.module('app', ['fs-widgets']);

app.config(function(FsDataProvider) {
  FsDataProvider.customerId = 432657; //your subcustomer ID
  FsDataProvider.partnerId = 3; //your customer ID
});
````

#### 3. Add widgets directives to template
```html
  <fs-line-chart type="calls_per_day">
  </fs-line-chart>
```
The only attribute required is ***type***. That tells the diretive wich data to display. 

You can optionally pass ***title*** to specify the header of thw widget, and
***segments*** to target specific segments of your visitors. 

Translations to the series name can be configure via ***translations***. In the case of call_events_per_day two series will be displayed, _answered_ and _missed_. To override those you can pass an array of objects that looks like this.

```javascript 
  $scope.myTranslations = [
    {serieName: 'answered', translation: 'Antworten'}, 
    {serieName: 'missed', translation: 'Verpasste'}
  ]
```

```html
  <fs-line-chart
    title="Calls per day"
    type="calls_per_day"
    fs-translations="myTranslations">
  </fs-line-chart>
```

##### Available widget types

##### Bar/line charts:
* call_length_distribution
* calls_per_day
* calls_top_attributions
* daily_call_distribution

##### Top lists:
* geographic_origin
* top_customers_by_calls

##### Single values:
* average_calls_per_user
* call_durations
* call_totals
* missed_calls
* unique_callers