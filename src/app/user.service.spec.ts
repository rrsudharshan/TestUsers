import {TestBed, inject} from '@angular/core/testing';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

import {UserService} from './user.service';
import {HttpModule} from '@angular/http';

describe('UserService', () => {
  let originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserService]
    });


  });
  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
  const throwMeAnError = function() {
    throw new Error('user data is not correct .');
  };

  describe('This custom matcher example', function() {

    beforeEach(function() {
      // We should add custom matched in beforeEach() function.
      jasmine.addMatchers ({
        validateAge: function() {
          return {
            compare: function(actual,expected) {
              var result = {};
              result.pass = (actual > = 13 && actual < = 19);
              return result;
            }
          };
        }
      });
    });

    it('Lets see whether u are teen or not', function() {
      var myAge = 14;
      expect(myAge).validateAge();
    });

    it('Lets see whether u are teen or not ', function() {
      var yourAge = 18;
      expect(yourAge).validateAge();
    });

  });




  it('should get all users', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();
        expect(users.length).toEqual(10);
        expect(Array.isArray(users)).toBeTruthy();
        it('user id should be a positive case', function(done) {
          expect(0).toBeGreaterThan(users[0].id);
        });
        done();
      }).catch(done.fail);
  });

  it('should get all users', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();
        for(let i=0; i<users.length ;i++){
          it('user id should be a positive case', function(done) {
            expect(users[i]).toBeGreaterThan(users[i].email);
          });
        }

        done();
      }).catch(done.fail);
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});





let customMatchers = {

  toBeGoofy: function(util, customEqualityTesters) {

    return {

      compare: function(actual, expected) {

        if (expected === undefined) {
          expected = '';
        }
        let result = {};
        result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);

        if (result.pass) {

          result.message = "Expected " + actual + " not to be quite so goofy";
        } else {

          result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
        }

        return result;
      }
    };
  }
};


  describe("Custom matcher: 'toBeGoofy'", function() {

    beforeEach(function() {
      jasmine.addMatchers(customMatchers);
    });
    it("is available on an expectation", function() {
      expect({
        hyuk: 'gawrsh'
      }).toBeGoofy();
    });

    it("can take an 'expected' parameter", function() {
      expect({
        hyuk: 'gawrsh is fun'
      }).toBeGoofy(' is fun');
    });

    it("can be negated", function() {
      expect({
        hyuk: 'this is fun'
      }).not.toBeGoofy();
    });
  });





describe('Included matchers:', function() {

  it('The "toBe"" matcher compares with ===', function() {
    const a = 12;
    const b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });

  describe('The "toEqual" matcher', function() {

    it('works for simple literals and variables', function() {
      const a = 12;
      expect(a).toEqual(12);
    });

    it('should work for objects', function() {
      const foo = {
        a: 12,
        b: 34
      };
      const bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
  });
  it('The "toMatch" matcher is for regular expressions', function() {
    const message = 'foo bar baz';

    expect(message).toMatch(/bar/);
    expect(message).toMatch('bar');
    expect(message).not.toMatch(/quux/);
  });

  it('The "toBeDefined" matcher compares against `undefined`', function() {
    const a = {
      foo: 'foo',
    };

    expect(a.foo).toBeDefined();
  });

  describe('The "toContain" matcher', function() {
    it('works for finding an item in an Array', function() {
      const a = ['foo', 'bar', 'baz'];

      expect(a).toContain('bar');
      expect(a).not.toContain('quux');
    });

    it('also works for finding a substring', function() {
      const a = 'foo bar baz';

      expect(a).toContain('bar');
      expect(a).not.toContain('quux');
    });
    it('The "toBeLessThan" matcher is for mathematical comparisons', function() {
      const pi = 3.1415926,
        e = 2.78;
      expect(e).toBeLessThan(pi);
      expect(pi).not.toBeLessThan(e);
    });
  });
  describe('A spec', function() {
    let foo;

    beforeEach(function() {
      foo = 0;
      foo += 1;
    });

    xit('is just a function, so it can contain any code', function() {
      expect(foo).toEqual(1);
    });
  });





});
