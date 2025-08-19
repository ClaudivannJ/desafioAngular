import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'home' 
    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'profile/:username', 
        component: ProfileComponent 
    },
    { 
        path: '**', 
        redirectTo: 'home' 
    }
];
