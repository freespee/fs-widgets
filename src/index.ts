/// <reference path="../node_modules/@types/angular/index.d.ts" />
declare var angular: angular.IAngularStatic;
import { FsData } from "./services/FsData.service";

angular
  .module('fs-widgets', [])
  .provider("FsData", [() => {return new FsData()}])

