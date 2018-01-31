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
