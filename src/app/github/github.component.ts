import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  profile: any;
  repos: any;
  name:string;
  username: string;
  avatar_url:any;
  followers:any;
  following:any;

  constructor(private githubService: GithubService) {
    this.githubService.updateUserProfile(this.username);
    this.githubService.getProfileInformation().subscribe(profile => {
      this.profile = profile;
    });

    this.githubService.getProfileRepos().subscribe(repos => {
      this.repos = repos;
    });

  }
  getUserProfile() {
    this.githubService.updateUserProfile(this.username);
    this.githubService.getProfileInformation().subscribe(profile => {
      this.profile = profile;
    });

    this.githubService.getProfileRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
    this.githubService.updateUserProfile('cheruden');
    this.githubService.getProfileInformation().subscribe(profile => this.profile = profile);
    // this.githubService.getProfileRepos().subscribe(repos =>  this.repos = repos);

  }
}