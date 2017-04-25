import angular from 'angular';
import StringifyHTML from './demo.js';

const MODULE_NAME = 'demo';

angular.module(MODULE_NAME, [])
  .directive('demoHtml', () => new StringifyHTML);

export default MODULE_NAME;
