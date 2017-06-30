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




#### 2. Add module as dependicy

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

You can optionally pass 
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
    type="calls_per_day"
    fs-translations="myTranslations">
  </fs-line-chart>
```




