(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/@types/angular/index.d.ts" />
var line_chart_component_1 = require("./components/line-chart/line-chart.component");
var bar_chart_component_1 = require("./components/bar-chart/bar-chart.component");
var top_list_component_1 = require("./components/top-list/top-list.component");
var single_value_component_1 = require("./components/single-value/single-value.component");
var FsData_service_1 = require("./services/FsData.service");
angular
    .module('fs-widgets', ['chart.js'])
    .provider("FsData", [function () { return new FsData_service_1.FsData(); }])
    .run(function ($http) { return $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; })
    .component('fsLineChart', line_chart_component_1.LineChartWidget)
    .component('fsBarChart', bar_chart_component_1.BarChartWidget)
    .component('fsTopList', top_list_component_1.TopListWidget)
    .component('fsSingleValue', single_value_component_1.SingleValueWidget);

});
___scope___.file("components/line-chart/line-chart.component.js", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
var axis_chart_component_1 = require("../axisChart/axis-chart.component");
var decorators_1 = require("../../decorators");
require("../axisChart/line-chart.styles.scss");
var LineChartWidget = /** @class */ (function (_super) {
    __extends(LineChartWidget, _super);
    function LineChartWidget($scope, FsData) {
        var _this = _super.call(this, $scope, FsData) || this;
        _this.$scope = $scope;
        _this.FsData = FsData;
        return _this;
    }
    LineChartWidget = __decorate([
        decorators_1.Component({
            template: "\n    <h3\n      ng-bind=\"vm.title\"\n      ng-click=\"swap()\"\n    ></h3>\n    <canvas\n      chart-data=\"vm.data.data\"\n      chart-labels=\"vm.data.labels\"\n      chart-series=\"vm.data.series\"\n      chart-options=\"vm.data.options\"\n      chart-colors=\"['#ff6600', '#777333']\"\n      class=\"chart-line\"\n    ></canvas-line>\n  ",
            bindings: {
                title: '@',
                type: '@',
                segments: '<',
                fsTranslations: '<'
            },
            controllerAs: 'vm',
        })
    ], LineChartWidget);
    return LineChartWidget;
}(axis_chart_component_1.AxisChartWidget));
exports.LineChartWidget = LineChartWidget;

});
___scope___.file("components/axisChart/axis-chart.component.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
var chartMappings_1 = require("../../chartMappings");
require("./bar-chart.styles.scss");
var AxisChartWidget = /** @class */ (function () {
    function AxisChartWidget($scope, FsData) {
        this.$scope = $scope;
        this.FsData = FsData;
        this.segments = ['all_data'];
        this.fsTranslations = [];
        this.data = {
            data: [],
            labels: [],
            series: [],
            options: []
        };
    }
    AxisChartWidget.prototype.setResponse = function (dataset, value, datasources, translations) {
        if (translations === void 0) { translations = []; }
        var data = [];
        var labels = [];
        var series = [];
        var chartMap = chartMappings_1.axisChartMappings[dataset];
        if (chartMap === undefined) {
            throw new Error("Chartmapping missing for " + dataset);
        }
        var xAxisColumn = chartMap.columns.find(function (m) { return m.xAxis; });
        var yAxisColumns = [];
        chartMap.columns.forEach(function (column) {
            if (column.xAxis === false) {
                yAxisColumns.push(column);
            }
        });
        value.datasources.forEach(function (ds) {
            var dataLabels = ds.data
                .sort(function (a, b) { return a.name < b.name ? -1 : 1; })
                .map(function (d) {
                if (d[xAxisColumn.key].length > 15) {
                    return d[xAxisColumn.key].substr(0, 15) + '...';
                }
                else {
                    return d[xAxisColumn.key];
                }
            })
                .filter(function (entry, index, arr) { return labels.indexOf(entry) === -1; });
            labels.push.apply(labels, dataLabels);
            var datasource = datasources.find(function (systemSource) { return systemSource.id === ds.datasource; });
            var objKeys = Object.keys(ds.data[0]);
            series.push.apply(series, objKeys.filter(function (key) { return yAxisColumns.find(function (m) { return key === m.key; }); }).map(function (key) {
                var overrideSerieName = translations.find(function (tran) { return tran.serieName === key; });
                var serieName = overrideSerieName !== undefined ? overrideSerieName.translation : key;
                return {
                    title: "" + serieName,
                    datasource: datasource,
                    data: ds.data.map(function (data) { return data[key]; })
                };
            }));
        });
        var outputSeries = [];
        var outputData = [];
        series.forEach(function (serie) {
            outputSeries.push(serie.title);
            outputData.push(serie.data);
        });
        this.data = {
            labels: labels,
            data: outputData,
            series: outputSeries.sort(function (a, b) { return a - b; }),
            options: {
                scales: {
                    xAxes: [{ gridLines: { display: false } }],
                    yAxes: [
                        {
                            gridLines: { display: false },
                            ticks: { beginAtZero: true }
                        }
                    ],
                }
            }
        };
    };
    AxisChartWidget.prototype.$onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, datasources;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FsData.getData(this.type, this.segments, '', '')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.FsData.getDatasources()];
                    case 2:
                        datasources = _a.sent();
                        this.setResponse(this.type, response, datasources, this.fsTranslations);
                        this.$scope.$apply();
                        return [2 /*return*/];
                }
            });
        });
    };
    AxisChartWidget.prototype.getAxisData = function (dataset, datasources) {
        this.data = {
            labels: ['2017-01-01', '2017-01-02'],
            data: ['1', '2'],
            series: ['1'],
            options: {
                scales: {
                    xAxes: [{ gridLines: { display: false } }],
                    yAxes: [{ gridLines: { display: false } }],
                }
            },
        };
    };
    return AxisChartWidget;
}());
exports.AxisChartWidget = AxisChartWidget;

});
___scope___.file("chartMappings.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axisChartMappings = {
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
exports.listChartMappings = {
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

});
___scope___.file("components/axisChart/bar-chart.styles.scss", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components/axisChart/bar-chart.styles.scss", "fs-bar-chart {\n  display: block;\n  background: #fff;\n  width: 500px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);\n  border-radius: 2px;\n  flex-direction: column;\n  padding: 20px; }\n  fs-bar-chart h3 {\n    font: 400 1em/1.5em \"Source Sans Pro\", sans-serif;\n    color: #777;\n    margin: 0 0 20px 0; }\n  fs-bar-chart canvas {\n    width: 100%; }\n\n/*# sourceMappingURL=bar-chart.styles.scss.map */")
});
___scope___.file("decorators.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/@types/angular/index.d.ts" />
exports.Component = function (options) {
    return function (controller) {
        return angular.extend(options, { controller: controller });
    };
};

});
___scope___.file("components/axisChart/line-chart.styles.scss", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components/axisChart/line-chart.styles.scss", "fs-line-chart {\n  display: block;\n  background: #fff;\n  width: 500px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);\n  border-radius: 2px;\n  flex-direction: column;\n  padding: 20px; }\n  fs-line-chart h3 {\n    font: 400 1em/1.5em \"Source Sans Pro\", sans-serif;\n    color: #777;\n    margin: 0 0 20px 0; }\n  fs-line-chart canvas {\n    width: 100%; }\n\n/*# sourceMappingURL=line-chart.styles.scss.map */")
});
___scope___.file("components/bar-chart/bar-chart.component.js", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
var axis_chart_component_1 = require("../axisChart/axis-chart.component");
var decorators_1 = require("../../decorators");
require("../axisChart/bar-chart.styles.scss");
var BarChartWidget = /** @class */ (function (_super) {
    __extends(BarChartWidget, _super);
    function BarChartWidget($scope, FsData) {
        var _this = _super.call(this, $scope, FsData) || this;
        _this.$scope = $scope;
        _this.FsData = FsData;
        return _this;
    }
    BarChartWidget = __decorate([
        decorators_1.Component({
            template: "\n    <h3\n      ng-bind=\"vm.title\"\n      ng-click=\"swap()\"\n    ></h3>\n    <canvas\n      chart-data=\"vm.data.data\"\n      chart-labels=\"vm.data.labels\"\n      chart-series=\"vm.data.series\"\n      chart-options=\"vm.data.options\"\n      chart-colors=\"['#ff6600', '#777333']\"\n      class=\"chart-bar\"\n    ></canvas-line>\n  ",
            bindings: {
                title: '@',
                type: '@',
                segments: '<',
                fsTranslations: '<'
            },
            controllerAs: 'vm',
        })
    ], BarChartWidget);
    return BarChartWidget;
}(axis_chart_component_1.AxisChartWidget));
exports.BarChartWidget = BarChartWidget;

});
___scope___.file("components/top-list/top-list.component.js", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
var chartMappings_1 = require("../../chartMappings");
var decorators_1 = require("../../decorators");
require("./top-list.styles.scss");
var TopListWidget = /** @class */ (function () {
    function TopListWidget($scope, FsData) {
        this.$scope = $scope;
        this.FsData = FsData;
        this.segments = ['all_data'];
        this.list = [];
    }
    TopListWidget.prototype.setResponse = function (dataset, value) {
        var data = [];
        var chartMap = chartMappings_1.listChartMappings[dataset];
        if (chartMap === undefined) {
            throw new Error("Chartmapping missing for " + dataset);
        }
        var nameColumn = chartMap.columns.find(function (m) { return m.name; });
        var valueColumn = chartMap.columns.find(function (m) { return !m.name; });
        value.datasources.forEach(function (ds) {
            var dataEntries = ds.data
                .filter(function (entry, index, arr) { return data.indexOf(entry) === -1; });
            data.push.apply(data, dataEntries);
        });
        var outputList = [];
        data.forEach(function (serie) {
            outputList.push({ 'name': serie[nameColumn.key], 'value': +serie[valueColumn.key] });
        });
        this.list = outputList.sort(function (a, b) { return a - b; });
    };
    TopListWidget.prototype.$onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FsData.getData(this.type, this.segments, '', '')];
                    case 1:
                        response = _a.sent();
                        this.setResponse(this.type, response);
                        this.$scope.$apply();
                        return [2 /*return*/];
                }
            });
        });
    };
    TopListWidget = __decorate([
        decorators_1.Component({
            template: "\n    <h3>{{vm.title}}</h3>\n    <table cell-spacing=\"0\" cell-padding=\"0\">\n      <thead>\n        <th>Name</th>\n        <th>Value</th>\n      </thead>\n      <tbody>\n        <tr\n          ng-repeat=\"item in vm.list | orderBy:'value':true | limitTo: 4\"\n        >\n          <td ng-bind=\"item.name\"></td>\n          <td ng-bind=\"item.value\"></td>\n        </tr>\n      </tbody>\n    </table>\n  ",
            bindings: {
                title: '@',
                type: '@',
                segments: '<',
            },
            controllerAs: 'vm',
        })
    ], TopListWidget);
    return TopListWidget;
}());
exports.TopListWidget = TopListWidget;

});
___scope___.file("components/top-list/top-list.styles.scss", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components/top-list/top-list.styles.scss", "fs-top-list {\n  display: block;\n  background: #fff;\n  width: 500px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);\n  border-radius: 2px;\n  flex-direction: column;\n  padding: 20px 0; }\n  fs-top-list h3 {\n    font: 400 1em/1.5em \"Source Sans Pro\", sans-serif;\n    color: #777;\n    margin: 0 0 10px 0;\n    padding: 0 20px; }\n  fs-top-list table {\n    font: 400 1em/1.5em \"Source Sans Pro\", sans-serif;\n    width: 100%;\n    border-collapse: collapse; }\n    fs-top-list table thead tr th {\n      padding: 5px 20px;\n      font-weight: 700;\n      text-align: left; }\n    fs-top-list table tbody tr {\n      border-bottom: 1px solid #f2f2f2;\n      transition: all .2s ease-in-out; }\n      fs-top-list table tbody tr:last-child {\n        border: 0; }\n      fs-top-list table tbody tr:hover {\n        background-color: #f8f8f8; }\n      fs-top-list table tbody tr td {\n        padding: 10px 20px; }\n\n/*# sourceMappingURL=top-list.styles.scss.map */")
});
___scope___.file("components/single-value/single-value.component.js", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
var decorators_1 = require("../../decorators");
require("./single-value.styles.scss");
var SingleValueWidget = /** @class */ (function () {
    function SingleValueWidget($scope, FsData) {
        this.$scope = $scope;
        this.FsData = FsData;
        this.segments = ['all_data'];
    }
    SingleValueWidget.prototype.setResponse = function (value) {
        this.value = value.datasources[0].data;
    };
    SingleValueWidget.prototype.$onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FsData.getData(this.type, this.segments, '', '')];
                    case 1:
                        response = _a.sent();
                        this.setResponse(response);
                        this.$scope.$apply();
                        return [2 /*return*/];
                }
            });
        });
    };
    SingleValueWidget.prototype.getSingleValue = function (dataset, datasources) {
        this.value = '1100 calls';
    };
    SingleValueWidget = __decorate([
        decorators_1.Component({
            template: "\n    <h3\n      ng-bind=\"vm.title\"\n      ng-click=\"swap()\"\n    ></h3>\n    <span class=\"__fs-single-value-value\" ng-bind=\"vm.value\"></span>\n  ",
            bindings: {
                title: '@',
                type: '@',
                segment: '@'
            },
            controllerAs: 'vm',
        })
    ], SingleValueWidget);
    return SingleValueWidget;
}());
exports.SingleValueWidget = SingleValueWidget;

});
___scope___.file("components/single-value/single-value.styles.scss", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components/single-value/single-value.styles.scss", "fs-single-value {\n  display: block;\n  background: #fff;\n  width: 500px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);\n  border-radius: 2px;\n  flex-direction: column;\n  padding: 20px;\n  margin: 20px; }\n  fs-single-value h3 {\n    font: 400 1em/1.5em \"Source Sans Pro\", sans-serif;\n    color: #777;\n    margin: 0 0 20px 0; }\n  fs-single-value span {\n    font: 400 1.5em/1.8em \"Source Sans Pro\", sans-serif;\n    display: block;\n    text-align: center; }\n\n/*# sourceMappingURL=single-value.styles.scss.map */")
});
___scope___.file("services/FsData.service.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var FsData = /** @class */ (function () {
    function FsData() {
        this._baseUrl = 'https://analytics.freespee.com';
        this._datasourceUrl = '/api/widgets/datasources?partner_id={{partnerId}}&customer_id={{customerId}}';
        this._dataUrl = '/api/widgets/content?type={{type}}&customer_id={{customerId}}';
    }
    Object.defineProperty(FsData.prototype, "partnerId", {
        set: function (partnerId) {
            this._partnerId = partnerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsData.prototype, "customerId", {
        set: function (customerId) {
            this._customerId = customerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsData.prototype, "baseUrl", {
        set: function (baseUrl) {
            this._baseUrl = baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsData.prototype, "datasourceUrl", {
        set: function (url) {
            this._datasourceUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsData.prototype, "dataUrl", {
        set: function (url) {
            this._dataUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    FsData.prototype.$get = function ($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this._dataUrl = this._dataUrl
            .replace(/{{customerId}}/g, this._customerId.toString());
        this._datasourceUrl = this._datasourceUrl
            .replace(/{{customerId}}/g, this._customerId.toString());
        return {
            getDatasources: this.getDatasources.bind(this),
            getData: this.getData.bind(this)
        };
    };
    FsData.prototype.getDatasources = function () {
        var _this = this;
        var deferred = this.$q.defer();
        if (this._datasources !== undefined) {
            deferred.resolve(this._datasources);
        }
        else {
            this.$http
                .get("" + this._baseUrl + this._datasourceUrl)
                .then(function (response) {
                _this._datasources = response.data;
                deferred.resolve(_this._datasources);
            })
                .catch(function (err) {
                deferred.reject(err.statusText || 'A error occured while fetching datasources');
            });
        }
        return deferred.promise;
    };
    FsData.prototype.getData = function (dataset, datasources, fromDate, toDate) {
        if (fromDate === void 0) { fromDate = ''; }
        if (toDate === void 0) { toDate = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var deferred, datasourceIds, nonMatchingDatasources, sources, requestUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deferred = this.$q.defer();
                        datasourceIds = [];
                        nonMatchingDatasources = [];
                        return [4 /*yield*/, this.getDatasources()];
                    case 1:
                        sources = _a.sent();
                        sources.forEach(function (ds) {
                            var datasourceByName = sources.find(function (s) { return s.name.toLowerCase() === (ds.name).toLowerCase(); });
                            if (datasourceByName !== undefined) {
                                datasourceIds.push(datasourceByName.datasource);
                            }
                            else {
                                nonMatchingDatasources.push(ds.name);
                            }
                        });
                        if (nonMatchingDatasources.length > 0) {
                            console.warn("Couldnt lookup existing datasource id(s) for " + nonMatchingDatasources.join(',') + ".");
                        }
                        if (datasourceIds.length === 0) {
                            datasourceIds.push(0);
                        }
                        requestUrl = ("" + this._baseUrl + this._dataUrl).replace(/{{datasources}}/g, datasourceIds.join(',')).replace(/{{type}}/g, dataset);
                        this.$http
                            .get(requestUrl)
                            .then(function (response) {
                            var resp = Array.isArray(response.data) ? response.data[0] : response.data;
                            deferred.resolve(resp);
                        })
                            .catch(function (err) {
                            deferred.reject(err.statusText || 'A error occured while fetching data');
                        });
                        return [2 /*return*/, deferred.promise];
                }
            });
        });
    };
    return FsData;
}());
exports.FsData = FsData;

});
});
FuseBox.pkg("fuse-box-css", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

/**
 * Listens to 'async' requets and if the name is a css file
 * wires it to `__fsbx_css`
 */

var runningInBrowser = FuseBox.isBrowser || FuseBox.target === "electron";

var cssHandler = function(__filename, contents) {
    if (runningInBrowser) {
        var styleId = __filename.replace(/[\.\/]+/g, '-');
        if (styleId.charAt(0) === '-') styleId = styleId.substring(1);
        var exists = document.getElementById(styleId);
        if (!exists) {
            //<link href="//fonts.googleapis.com/css?family=Covered+By+Your+Grace" rel="stylesheet" type="text/css">
            var s = document.createElement(contents ? 'style' : 'link');
            s.id = styleId;
            s.type = 'text/css';
            if (contents) {
                s.innerHTML = contents;
            } else {
                s.rel = 'stylesheet';
                s.href = __filename;
            }
            document.getElementsByTagName('head')[0].appendChild(s);
        } else {
            if (contents) {
                exists.innerHTML = contents;
            }
        }
    }
}
if (typeof FuseBox !== "undefined" && runningInBrowser) {
    FuseBox.on('async', function(name) {
        if (/\.css$/.test(name)) {
            cssHandler(name);
            return false;
        }
    });
}

module.exports = cssHandler;
});
return ___scope___.entry = "index.js";
});
FuseBox.global("__fsbx_decorate", function(localArguments) {
    return function(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;

        if (!decorators) {
            return;
        }
        if (decorators && decorators.push) {
            decorators.push(
                __metadata("fusebox:exports", localArguments[0]),
                __metadata("fusebox:require", localArguments[1]),
                __metadata("fusebox:module", localArguments[2]),
                __metadata("fusebox:__filename", localArguments[3]),
                __metadata("fusebox:__dirname", localArguments[4])
            );
        }
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
});

FuseBox.global("__metadata", function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
});

FuseBox.global("__extends", function(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
});

FuseBox.global("__awaiter", function(thisArg, _arguments, P, generator) {
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : new P(function(resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
});

FuseBox.global("__generator", function(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] },
        f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };

    function verb(n) { return function(v) { return step([n, v]); }; }

    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return { value: op[1], done: false };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally { f = t = 0; }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
});

FuseBox.target = "universal"

FuseBox.import("default/index.js");
FuseBox.main("default/index.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))