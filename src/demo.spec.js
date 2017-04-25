'use strict';

import app from '../src';

describe('demo-html directive', () => {
  let element, scope;

  beforeEach(angular.mock.module(app));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $rootScope = _$rootScope_,
        $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<demo-html></demo-html>');

    $compile(element)(scope);
  }));

  it('Should be true', () => {
    expect(true).toBe(true);
  });
});
