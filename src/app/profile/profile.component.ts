import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GithubApiService } from '../services/github-api.service';
import { User } from '../models/user.model';
import { Repo } from '../models/repo.model';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faMapMarkerAlt, faEnvelope, faLink, faArrowLeft, faStar, faClock, faUsers, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(GithubApiService);
  private fb = inject(FormBuilder);

  faBuilding = faBuilding;
  faMapMarker = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faLink = faLink;
  faXTwitter = faXTwitter;
  faArrowLeft = faArrowLeft;
  faStar = faStar;
  faClock = faClock;
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faSearch = faSearch

  loading = false;
  error = false;
  user: User | null = null;
  repos: Repo[] = [];

  searchForm = this.fb.group({
    username: [''],
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const username = params.get('username')?.trim();
      if (username) {
        this.searchForm.patchValue({ username }); // ✅ coloca o nome no input
        this.fetchUserAndRepos(username);
      }
    });
  }

  onSearch(): void {
    const username = this.searchForm.value.username?.trim();
    if (username) {
      this.router.navigate(['/perfil', username]);
    }
  }

  private fetchUserAndRepos(username: string): void {
    this.loading = true;
    this.error = false;
    this.user = null;
    this.repos = [];

    this.api.getUserByName(username).subscribe({
      next: (data) => { this.user = data; },
      error: () => { this.error = true; this.loading = false; }
    });

    this.api.getRepos(username).subscribe({
      next: (list) => {
        this.repos = [...list].sort((repoA, repoB) => repoB.stargazers_count - repoA.stargazers_count);
        this.loading = false;
      },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  siteUrl(): string | null {
    const blog = this.user?.blog?.trim();
    if (!blog) return null;
    return /^https?:\/\//i.test(blog) ? blog : 'https://' + blog;
  }

  twitterUrl(): string | null {
    const twitter_user = this.user?.twitter_username?.trim();
    return twitter_user ? `https://x.com/${twitter_user}` : null;
  }
//diff = diferença
  getTimeAgo(dateStr: string): string {
    const updated = new Date(dateStr);
    const now = new Date();
    const diffInSeconds = Math.floor((+now - +updated) / 1000);
    
    if (diffInSeconds < 60) {
      return `atualizado há ${diffInSeconds} segundo${diffInSeconds !== 1 ? 's' : ''}`;
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `atualizado há ${diffInMinutes} minuto${diffInMinutes !== 1 ? 's' : ''}`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `atualizado há ${diffInHours} hora${diffInHours !== 1 ? 's' : ''}`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `atualizado há ${diffInDays} dia${diffInDays !== 1 ? 's' : ''}`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `atualizado há ${diffInMonths} mês${diffInMonths !== 1 ? 'es' : ''}`;
    }
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `atualizado há ${diffInYears} ano${diffInYears !== 1 ? 's' : ''}`;
  }
}