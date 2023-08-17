import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from 'src/app/services/prescription/prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent  implements OnInit {

  constructor(private  prescriptionService:PrescriptionService) { }
  isModalOpen = false;
  selectedMedicationArray: Array<any> = [];
  medications: Array<any> =[];
  setOpen(isOpen: boolean, medicationArray: any) {
    this.isModalOpen = isOpen;
    this.selectedMedicationArray=medicationArray;
    console.log(this.selectedMedicationArray);
  }



  ngOnInit() {
    this.prescriptionService.getAllPatientPrescription(sessionStorage.getItem('patientId')).then(response => {
      this.medications = response.data;
      console.log(response);
    })
  }

}
