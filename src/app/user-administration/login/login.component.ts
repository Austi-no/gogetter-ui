import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  outputMessage: any;
  isLoggedIn: boolean;
  submitted: boolean = false;
  isNotLoggedIn: boolean = false;

  constructor(private router: Router, private sessionService: SessionService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    sessionStorage.clear()
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  gotoRegister() {
    this.router.navigate(['signup']);
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    this.authService.login(this.loginForm.value).subscribe(

      data => {
        console.log(data)
        if (data.token) {
          this.sessionService.setToken(data);
          this.isLoggedIn = true;
          this.submitted = false;
          this.sessionService.setUser(data);
          this.outputMessage = 'Login is Successful';
          this.router.navigate(['dashboard']);
        }
        else {
          this.outputMessage = 'Login not Successful';
          this.isNotLoggedIn = true;
          this.submitted = false;
        }

      },
      err => {
        if (err.status === 404) {
          this.isNotLoggedIn = true;
        }

        this.outputMessage = err.error.message;
        this.submitted = false;
      }
    );

  }

}
