import { Component, Input, OnInit } from '@angular/core';
import { PrescriptionService } from 'src/app/services/prescription/prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent  implements OnInit {
  @Input() patientId: string = "";
  constructor(private  prescriptionService:PrescriptionService) { }
  isModalOpen = false;

  setOpen(isOpen: boolean, medicationArray: any) {
    this.isModalOpen = isOpen;
    this.selectedMedicationArray=medicationArray;
    console.log(this.selectedMedicationArray);
  }

  selectedMedicationArray: Array<any> = [];
  medications: Array<any> =[];

  ngOnInit() {
    console.log(this.patientId);
    this.prescriptionService.getAllPatientPrescription(this.patientId).then(response => {
      this.medications = response.data;
      console.log(response);
    })
  }

}
