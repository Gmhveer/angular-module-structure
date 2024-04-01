import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpService,
    private router: Router
  ) { }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  ngOnInit(): void {
    if (localStorage.getItem('auth') == 'success') this.router.navigate(['/dashboard']);
  }
  submit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid)
      this.http.post('login', this.loginForm.value).subscribe((res: any) => {
        console.log(res, 'response');
        if (res['status'] == 'success') { localStorage.setItem('auth', res.status); this.router.navigate(['/dashboard']) }
      });


  }
}
