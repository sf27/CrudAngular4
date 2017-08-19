import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: '../templates/main.component.html',
})
export class MainComponent {

  constructor(private router: Router) {
  }

  gotoPostsList(): void {
    this.router.navigate(['/post/list']);
  }

  gotoMain(): void {
    this.router.navigate(['/']);
  }
}
