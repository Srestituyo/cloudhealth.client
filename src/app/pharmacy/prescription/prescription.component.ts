import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PrescriptionService } from 'src/app/services/prescription/prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent  implements OnInit {
  @Input() patientId: string = "";
  constructor(private  prescriptionService:PrescriptionService,private toastController: ToastController, private router:Router) { }
  isModalOpen = false;

  setOpen(isOpen: boolean, medicationArray: any, index:any) {
    this.isModalOpen = isOpen;
    this.selectedMedicationArray=medicationArray;
    this.selectedIndex = index;
    console.log(this.selectedMedicationArray);
  }

  onStatusChange(event: any) {
    const selectedValue = event.detail.value;
    this.medications[this.selectedIndex].status = selectedValue;
    console.log('Selected Status:', selectedValue);
    // Call your function or perform any other actions with the selected value here
  }

  onSaveStatus(){
    this.prescriptionService.updatePrescription(this.medications[this.selectedIndex]).then(async response => {
      if(response.status === 200){
        const toast = await this.toastController.create({
          message: response.message,
          duration: 2500,
          color: 'success',
          position: 'top',
        });
        await toast.present();


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
      }
    })
  }
  
  selectedMedicationArray: Array<any> = [];
  selectedIndex = 0;
  medications: Array<any> =[];

  ngOnInit() {
    console.log(this.patientId);
    this.prescriptionService.getAllPatientPrescription(this.patientId).then(response => {
      this.medications = response.data;
      console.log(response);
    })
  }

}
