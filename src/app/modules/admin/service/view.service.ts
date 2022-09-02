import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) { }

  jsonUrl = 'https://fir-project-bk-default-rtdb.asia-southeast1.firebasedatabase.app/'

  urlPost = 'https://jsonplaceholder.typicode.com/posts';
  urlUser = 'https://jsonplaceholder.typicode.com/users';
  urlTodo = 'https://jsonplaceholder.typicode.com/todos'

  getPost() {
    return this.http.get(this.urlPost);
  }
  getUser() {
    return this.http.get(this.urlUser);
  }
  getTodo() {
    return this.http.get(this.urlTodo);
  }
  addPost(data: any) {
    return this.http.post(this.urlPost, data);
  }
}
