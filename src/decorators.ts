/// <reference path="../node_modules/@types/angular/index.d.ts" />
declare var angular: angular.IAngularStatic;

export const Component = function(options: ng.IComponentOptions): Function {
  return (controller: Function) => {
    return angular.extend(options, {controller});
  };
};