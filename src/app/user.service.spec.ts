import {TestBed, inject} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpModule} from '@angular/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserService]
    });


  });
  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all users', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();
        expect(users.length).toEqual(10);
        expect(Array.isArray(users)).toBeTruthy();
        it('user id should be a positive case', function() {
          expect(0).toBeGreaterThan(users[0].id);
        });
        done();
      })
      .catch(done.fail);
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
  describe("A spec", function() {
    var foo;

    beforeEach(function() {
      foo = 0;
      foo += 1;
    });

    xit("is just a function, so it can contain any code", function() {
      expect(foo).toEqual(1);
    });
  });
});
