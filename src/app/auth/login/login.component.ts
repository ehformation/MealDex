import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    username: ['', Validators.required, Validators.minLength(2)],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  errors: boolean = false;
  loading: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    
    const username = this.form.value.username!.trim().toLowerCase(); 
    const password = this.form.value.password!;

    this.authService.login(username!, password!).subscribe({
      next: (success) => {
        this.loading = false;
        if (success) {
          this.router.navigate(['/']);
        } else {
          this.errors = true;
        }
      },
      error: () => {
        this.loading = false;
        this.errors = true;
        this.form.get('password')?.reset();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
