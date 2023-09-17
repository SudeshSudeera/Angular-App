import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(currentPage: number, itemsPerPage: number): Observable<any> {
    const params = new HttpParams()
      .set('page', currentPage.toString())
      .set('per_page', itemsPerPage.toString());

    return this.http.get(`${this.apiUrl}`, { params });
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
