import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 
import { AuthenticationService } from '../services/authentication/authentication.service';
import { DoctorService } from '../services/doctor/doctor.service';
import { PatientService } from '../services/patient/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private route:Router,private toastController: ToastController,
    private authenticationService:AuthenticationService, 
    private doctorService:DoctorService,
    private patientService:PatientService) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  async onLogin(){
    if(this.loginForm.valid){
     await this.authenticationService.login(this.loginForm.value).then(response => {

        if(response.token){
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.userId);

          if(response.role === 'Patient'){
            //do patient stuff
            this.patientService.getPatientByUserId(response.userId).then(patientData => {
              console.log(patientData);
               sessionStorage.setItem('patientId', patientData.data.patientId);
               this.route.navigateByUrl('patient');

             })
          }else if(response.role === 'Doctor'){
            this.doctorService.getDoctorByUserId(response.userId).then(doctorData => {
             console.log(doctorData);
              sessionStorage.setItem('doctorId', doctorData.data.doctorId);
            })
            this.route.navigateByUrl('doctor');

          }else if(response.role === 'Pharmacist'){
            this.route.navigateByUrl('pharmacy');

          }
        }else{
           this.toastController.create({
            message: response.message,
            duration: 2500,
            color: 'danger',
            position: 'top',
          }).then((toast) =>{
             toast.present();
             return

          });
        }      });
       
      
    } else{
      
    const toast = await this.toastController.create({
      message: 'Please fill all form inputs!',
      duration: 2500,
      color: 'danger',
      position: 'top',
    });

    await toast.present();
    }

  }

  ngOnInit() {}

}
