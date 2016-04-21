'use strict';

var pkg = require('./package.json');

module.exports = {
    getName() {
        return pkg.name;
    }
};
