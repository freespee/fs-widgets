import * as angular from 'angular';
import { FsData } from "./services/FsData.service";

angular
  .module('fs-widgets', [])
  .service('FsData', FsData);
