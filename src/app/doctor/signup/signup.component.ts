import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {

  constructor(private route:Router,
    private toastController: ToastController, 
    private authenticationService:AuthenticationService,
    private doctorService:DoctorService) { }

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    userId: new FormControl(''),
    doctorId: new FormControl(0),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    emailAddress: new FormControl(''),
    birthDate: new FormControl('', Validators.required),
    documentType: new FormControl('', Validators.required),
    documentNumber: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    role: new FormControl('Doctor'),
    specialist: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirmPassword:  new FormControl('',Validators.required)
  })

  async onSignUp(){
    if(this.signupForm.valid){

      this.authenticationService.createUser(this.signupForm.value).then(async response => {
        if(response.status === 'Success'){
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2500,
            color: 'success',
            position: 'top',
          });

          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('userId', response.userId);

          this.signupForm.controls['userId'].setValue(response.data.userId);
          this.signupForm.controls['emailAddress'].setValue(this.signupForm.controls['email'].value);

          this.doctorService.createDoctor(this.signupForm.value).then(async response => {
            await toast.present().then(() => this.route.navigateByUrl('doctor'));
          })


        }else{
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2500,
            color: 'danger',
            position: 'top',
          });

          await toast.present();
        }
        
      })
     
      

      return
    }

    const toast = await this.toastController.create({
      message: 'Please fill all form inputs!',
      duration: 1500,
      color: 'danger',
      position: 'top',
    });

    await toast.present();
  }
  ngOnInit() {}

}
