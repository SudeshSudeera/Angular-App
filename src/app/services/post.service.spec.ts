import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { USERS } from '../mock-data/user';

describe('PostService', () => {
  let service: PostService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [PostService]
    });

    service = TestBed.inject(PostService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    let currentPage = 1;
    let itemsPerPage = 3;

    service.getUsers(currentPage, itemsPerPage).subscribe((data:any) => {
      expect(data).toBeTruthy();
    });

    const req = testingController.expectOne(`${service.apiUrl}?page=${currentPage}&per_page=${itemsPerPage}`);
    expect(req.request.method).toEqual('GET');
    req.flush(Object.values(USERS));
  });

  it('should get user by id', () => {
    let userId = 1;

    service.getUserById(userId).subscribe((data:any) => {
      expect(data).toBeTruthy();
      expect(data.id).toBe(1);
    });

    const req = testingController.expectOne(`${service.apiUrl}/${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(USERS[1]);
  });

  it('should update the user by id', () => {
    let userId = 1;
    let changes = {first_name: 'sudesh'};

    service.updateUser(userId, changes).subscribe((data:any) => {
      expect(data).toBeTruthy();
      expect(data.id).toBe(1);
    });

    const req = testingController.expectOne(`${service.apiUrl}/${userId}`);
    expect(req.request.method).toEqual('PUT');
    let modifiedUser = USERS[1];
    modifiedUser.first_name = 'sudesh';
    expect(req.request.body.first_name).toEqual(changes.first_name);
    req.flush(USERS[1]);
  });

  it('should be deleted', () => {
    let userId = 1;

    service.deleteUser(userId).subscribe((data:any) => {
      expect(data).toBeTruthy();
    });

    const req = testingController.expectOne(`${service.apiUrl}/${userId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(USERS[1]);
  });

  afterEach(() => {
    testingController.verify();
  });

});
