import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly VALID_USER = 'admin'
  private readonly VALID_PASSWORD = 'password'

  private loggedIn = false;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    
    return new Observable(observer => {
      setTimeout(() => {
        if (username === this.VALID_USER && password === this.VALID_PASSWORD) {
          this.loggedIn = true
          observer.next(true)
        } else {
          observer.next(false)
        }
        observer.complete()
      }, 1000) 
    })
  }

  logout(): void {
    this.loggedIn = false
  }

  isLoggedIn(): boolean {
    return this.loggedIn
  }
}
