import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profile: any = null;
  constructor(private router: Router) {
    this.profile = localStorage.getItem('auth') == 'success';
  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
