import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  constructor(private http: HttpClient) {
    this.username = 'cheruden';
  }
  getProfileInformation() {
    return this.http.get(`https://api.github.com/users/${this.username}?}`)
  }
  getProfileRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos?}`)
  }
  updateUserProfile(username: string) {
    this.username = username;
  }
}
  