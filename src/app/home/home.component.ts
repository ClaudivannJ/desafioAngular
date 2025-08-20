import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [ ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
    private fb = inject(FormBuilder);
    private router = inject(Router);
    faSearch = faSearch;

    form = this.fb.group({username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]]});

    onSubmit():void{
      const username = this.form.value.username?.trim();
      if(username){
        this.router.navigate(['/perfil', username]);
      }
    }

}
