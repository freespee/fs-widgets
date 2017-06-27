declare var angular: any;
import { FsData } from "./services/FsData.service";

angular
  .module('fs-widgets', [])
  .service('FsData', FsData);
