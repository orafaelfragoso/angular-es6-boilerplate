import angular from 'angular';
import DemoHTML from './demo.js';

const MODULE_NAME = 'demo';

angular.module(MODULE_NAME, [])
  .directive('demoHtml', () => new DemoHTML);

export default MODULE_NAME;
