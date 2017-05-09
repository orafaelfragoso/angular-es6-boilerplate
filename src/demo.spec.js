import app from '../src';

describe('demo-html directive', () => {
  let element;
  let scope;

  beforeEach(() => angular.mock.module(app));

  beforeEach(inject((_$rootScope_, _$compile_) => {
    const $rootScope = _$rootScope_;
    const $compile = _$compile_;

    scope = $rootScope.$new();
    element = $compile('<demo-html></demo-html>')(scope);
    scope.$digest();
  }));

  it('Should show text "Demo Page"', () => {
    expect(element.text()).toBe('Demo Page');
  });
});
