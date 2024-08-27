import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  city: string = '';

  constructor(private router: Router) {}

  onSearch() {
    if (this.city) {
      this.router.navigate(['/weather'], { queryParams: { city: this.city } });
    }
  }
}
