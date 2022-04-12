import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CustomValidationService } from '../validations/custom-validations';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;
  submitted: boolean = false;
  success: boolean = false;
  failure: boolean = false;
  imgURL: string | ArrayBuffer;
  imagePath: any;

  constructor(private validationService: CustomValidationService, private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      province: ['', [Validators.required]],
      bornCity: ['', [Validators.required]],
      currentCity: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', Validators.required],
      // profilePicture: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validationService.patternValidator()]],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.validationService.MatchPassword('password', 'confirmPassword'),

      });
  }

  get f() { return this.signupForm.controls;
   }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.authService.register(this.signupForm.value).subscribe(res => {
      if (res.userId != null) {
        this.success = true;
        this.failure = false;
        this.submitted = false;
      }
      else {
        this.success = false;
        this.failure = true;
        this.submitted = false;
      }
    },
      err => {
        this.submitted = false;
        console.log(err)
      }
    )

  }


  gotoSignIn() {
    this.router.navigate(['login']);
  }

  previewImage(files) {
      if (files.length === 0)
        return;

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        // this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }



