(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/@types/angular/index.d.ts" />
var line_chart_component_1 = require("./components/line-chart.component");
var FsData_service_1 = require("./services/FsData.service");
angular
    .module('fs-widgets', [])
    .provider("FsData", [function () { return new FsData_service_1.FsData(); }])
    .run(function ($http) {
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
})
    .component('lineChartWidget', line_chart_component_1.LineChartWidget);

});
___scope___.file("components/line-chart.component.js", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators");
require("./line-chart.styles.css");
var LineChartWidget = (function () {
    function LineChartWidget() {
        this.title = 'hello from title before con';
    }
    return LineChartWidget;
}());
LineChartWidget = __decorate([
    decorators_1.Component({
        template: "Hello World {{vm.title}}",
        bindings: {
            type: '<',
            segments: '<',
        },
        controllerAs: 'vm',
    })
], LineChartWidget);
exports.LineChartWidget = LineChartWidget;

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
___scope___.file("components/line-chart.styles.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components/line-chart.styles.css", "line-chart-widget {\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 500px;\n  height: 500px;\n  box-shadow: 0 4px 6px rgba(0,0,0,.4);\n  border-radius: 2px;\n}")
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
var FsData = (function () {
    function FsData() {
        this._baseUrl = 'https://analytics.freespee.com';
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
    FsData.prototype.$get = function ($http, $q) {
        this.$http = $http;
        this.$q = $q;
        return {
            getDatasources: this.getDatasources.bind(this),
            getData: this.getData.bind(this),
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
                .get(this._baseUrl + "/be/widgets/datasources?customer_id=" + this._customerId + "&partner_id=" + this._partnerId)
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
    FsData.prototype.getData = function (dataset, datasources) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var deferred, datasourceIds, nonMatchingDatasources, sources;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        deferred = this.$q.defer();
                        datasourceIds = [];
                        nonMatchingDatasources = [];
                        return [4 /*yield*/, this.getDatasources()];
                    case 1:
                        sources = _a.sent();
                        datasources.forEach(function (ds) {
                            debugger;
                            var datasourceByName = sources.find(function (s) { return s.name.toLowerCase() === ds.toLowerCase(); });
                            if (datasourceByName !== null) {
                                datasourceIds.push(datasourceByName.id);
                            }
                            else {
                                nonMatchingDatasources.push(ds);
                            }
                        });
                        if (nonMatchingDatasources.length < 0) {
                            throw new Error("Couldnt find a matching datasource for " + nonMatchingDatasources.join(','));
                        }
                        this.$http
                            .get(this._baseUrl + "/be/widgets/datasources/data?customer_id=" + this._customerId + "&partner_id=" + this._partnerId + "&datasources=" + datasourceIds.join(','))
                            .then(function (response) {
                            var result = _this.transform(dataset, response.data, _this._datasources);
                            deferred.resolve(result);
                        })
                            .catch(function (err) {
                            deferred.reject(err.statusText || 'A error occured while fetching data');
                        });
                        return [2 /*return*/, deferred.promise];
                }
            });
        });
    };
    FsData.prototype.transform = function (dataset, resp, datasources) {
        // let data: any[] = [];
        // let labels: string[] = [];
        // let series: string[] = [];
        // const chartMap = chartMappings[type];
        // const xAxisColumn = chartMap.columns.find((m) => m.xAxis);
        // resp.datasources.forEach((ds) => {
        //   const uniqueLabels = ds.data.map(d => d[xAxisColumn.key]).filter((entry, index, arr) => {
        //     return arr.indexOf(entry) !== index;
        //   });
        //   labels = uniqueLabels;
        // });
        // resp.datasources.forEach((ds, index, array) => {
        //   let serie = <Datasource>datasources.find((systemSource) => systemSource.id === ds.datasource);
        //   let serieSuffix: string = serie.name;
        //   const objKeys = Object.keys(ds.data[0]);
        //   series.push(...objKeys.filter(k => k !== xAxisColumn.name).map((k) => {
        //       return `${k} (${serieSuffix})`;
        //     })
        //   );
        //   debugger;
        //   //answered (Google), answered (Bing)
        //   ds.data.map((d) => {
        //     chartMap.columns.forEach((col: any) => {
        //       if(Object.hasOwnProperty(col.key) && col.xAxis === false) {
        //         series.push( )
        //       }
        //     });
        //   });
        // });
        // return {
        //   labels,
        //   data: [{}, {}],
        //   series: [], //Answered (segment_name), Missed (segment_name)
        // }
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
if (typeof FuseBox !== "undefined" && FuseBox.isBrowser) {
    FuseBox.on('async', function(name) {
        if (FuseBox.isServer) {
            return;
        }
        if (/\.css$/.test(name)) {
            __fsbx_css(name);
            return false;
        }
    });
}

module.exports = function(__filename, contents) {
    if (!FuseBox.isServer) {
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


FuseBox.import("default/index.js");
FuseBox.main("default/index.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=h[a];if(!s){if(d&&"electron"!==g.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);g.dynamic(a,o),r(g.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=m[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=h[t.pkgName];if(u){var p={};for(var m in u.f)a.test(m)&&(p[m]=c(t.pkgName+"/"+m));return p}}if(!i){var g="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return g?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},w.require.main={filename:d?"./":v.require.main.filename,paths:d?[]:v.require.main.paths};var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var h=p.p=p.p||{},m=p.e=p.e||{},g=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){m[e]=m[e]||[],m[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=h[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=h.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(h[e])return n(h[e].s);var t=h[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r}();return g.packages=h,g.isBrowser=d,g.isServer=!d,g.plugins=[],d||(v.FuseBox=g),e.FuseBox=g}(this))