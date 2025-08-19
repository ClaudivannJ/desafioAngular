import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/users`;

  getUserByName(username:string):Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }

  getRepos(username:string):Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseUrl}/${username}/repos`)
  }
}
