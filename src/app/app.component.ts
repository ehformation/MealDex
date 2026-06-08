import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mealdex';

  ngOnChanges() {
    console.log("AppComponent changed");
  }

  ngOnInit() {
    console.log("AppComponent initialized");
  }
  
}
