import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mealdex';

  constructor(public auth: AuthService, private router: Router) {}

  ngOnChanges() {
    console.log("AppComponent changed");
  }

  ngOnInit() {
    console.log("AppComponent initialized");
  }

  logout(): void {
    this.auth.logout(); 
    this.router.navigate(['/login']);   
  }

  
}
