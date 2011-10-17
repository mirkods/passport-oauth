var vows = require('vows');
var assert = require('assert');
var util = require('util');
var oauth = require('passport-oauth');


vows.describe('passport-oauth').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(oauth.version);
    },
  },
  
}).export(module);
