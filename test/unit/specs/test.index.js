'use strict';

var pkg = require('../../../package.json');
var lib = require('../../../dist/my-own-lib');
var libMin = require('../../../dist/my-own-lib.min');

describe('General', function () {
    it('should not throw an error in full version', function () {
        expect(function () {
            return lib.getName()
        }).not.toThrow();
    });
    it('should not throw an error in min version', function () {
        expect(function () {
            return libMin.getName()
        }).not.toThrow();
    });

    it('should proper full version of lib', function () {
        expect(lib.getName()).toEqual(pkg.name);
    });

    it('should proper min version of lib', function () {
        expect(libMin.getName()).toEqual(pkg.name);
    });
});
