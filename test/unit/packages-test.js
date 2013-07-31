//
// test/unit/packages-test
//

var Packages = require('../../lib/collections/packages');
var Package = require('../../lib/models/package');
var expect = require('expect.js');

var testHelper = require('../support/test-helper');
var registry = testHelper.registry;


var mockData = [{
  name: 'thename',
  version: '1.2.3',
  url: 'https://github.com/bower/registry.git'
}, {
  name: 'anothername',
  version: '3.2.1',
  url: 'http://github.com/bower/bower.git'
}];

testHelper.mocks(registry.url(), testHelper.opts, testHelper.ddocs);

describe('Packages', function () {

  beforeEach(function (done) {

    registry.promise.then(function () {
      done();
    });

  });

  describe('Collection', function () {

    beforeEach(function () {
      this.pkg = new Packages(registry);
    });

    describe('Constructor', function () {

      it('should be an instance of Packages', function () {
        expect(this.pkg).to.be.a(Packages);
      });

      it('should have normal exposed props', function () {
        expect(this.pkg.registry).to.eql(registry);
      });

    });

    describe('Instance', function () {

      it('should have array methods', function () {
        expect(this.pkg.forEach).to.be.a(Function);
        expect(this.pkg.map).to.be.a(Function);
        expect(this.pkg.slice).to.be.a(Function);
        expect(this.pkg.length).to.be(0);
      });

    });

    describe('Resetting', function () {

      describe('An Array of Data', function () {

        it('should create models', function () {
          this.pkg.reset(mockData);
          expect(this.pkg.length).to.be(2);
          expect(this.pkg[0]).to.be.a(Package);
          expect(this.pkg[1]).to.be.a(Package);
          expect(this.pkg[2]).to.be(undefined);
          var out = this.pkg[0].toObject();
          expect(out.name).to.eql(mockData[0].name);
        });

      });

      describe('An Array of Models', function () {

        it('should populate the controller with models', function () {
          this.pkg.reset([
            new Package(registry, mockData[0]),
            new Package(registry, mockData[1])
          ]);

          expect(this.pkg.length).to.be(2);
          expect(this.pkg[0]).to.be.a(Package);
          expect(this.pkg[1]).to.be.a(Package);
          expect(this.pkg[2]).to.be(undefined);
        });

      });

    });

  });

});

