require('babel-core/register');
require('babel-polyfill');

const chai = require('chai');

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;