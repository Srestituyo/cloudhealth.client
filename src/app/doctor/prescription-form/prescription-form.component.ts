import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IonModal, ToastController } from '@ionic/angular';
import { MedicationItem } from './typeahead/types';
import { MedicationService } from 'src/app/services/medication/medication.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PrescriptionService } from 'src/app/services/prescription/prescription.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss'],
})
export class PrescriptionFormComponent  implements OnInit {

  constructor(private toastController: ToastController,
    private medicationService:MedicationService,private route: ActivatedRoute,
    private prescriptionService:PrescriptionService,
    private router:Router) { }

  @ViewChild('modal', { static: true }) modal!: IonModal;
  patientId: string = "";

  selectedMedicationText = 'No medication selected.';
  selectedMedication: any[] = [];

  medications: any[] = [];
   private formatData(data: MedicationItem[]) {
    if (data.length === 1) {
      const medication = this.medications.find((medication) => medication.name === data[0].name);
      if(medication !== undefined){
        return medication.name;
      }
    }

    return `${data.length} medications`;
  }

  medicationSelectionChanged(medications: MedicationItem[]) {
     this.selectedMedication = medications;
     this.selectedMedicationText = this.formatData(this.selectedMedication);

     let medicationArray: Array<any> = [];

     for(let x = 0; x< this.selectedMedication.length; x++){
        let medicationForm = new FormGroup({
          medicationPrescribedId: new FormControl(0),
          medicationId: new FormControl(this.selectedMedication[x].medicationId),
          name: new FormControl(this.selectedMedication[x].name),
          image: new FormControl(this.selectedMedication[x].image),
          route: new FormControl('', Validators.required),
          dosage: new FormControl('', Validators.required),
          frequency: new FormControl('', Validators.required),
          expirationDate: new FormControl(this.selectedMedication[x].expirationDate),
          lastTakenDate: new FormControl('0001-01-01T00:00:00')
        });
 
        this.medication_form_array.push(medicationForm);
      } 

    console.log(this.prescriptionForm);
     this.modal.dismiss();
  }

  printwhatis(something:any, input:string){
    return something.controls[input]
  }

  get medication_form_array(){
    return this.prescriptionForm.get('prescribedMedications') as FormArray;
  }


  getNewDate(){
    const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate

  }
  prescriptionForm = new FormGroup({
    patientId: new FormControl('', Validators.required),
    doctorId: new FormControl('', Validators.required),
    prescribedMedications: new FormArray([]), 
    medication: new FormControl(''),
    quantity: new FormControl(''),
    condition: new FormControl('', Validators.required),
    status: new FormControl('new', Validators.required),
    notes:  new FormControl('',Validators.required),
    instructions:  new FormControl('',Validators.required),
    prescribedDate:  new FormControl(this.getNewDate(),Validators.required),
    expirationDate:  new FormControl('',Validators.required),
  })
  administrationRoutes = [
    { label: 'Oral', value: 'oral' },
    { label: 'Intravenosa', value: 'intravenosa' },
    { label: 'Intramuscular', value: 'intramuscular' },
    { label: 'Subcutánea', value: 'subcutanea' },
   ];
  dosageStrengths: { label: string; value: string }[] = [
    { label: 'mg (miligramos)', value: 'mg' },
    { label: 'mcg (microgramos)', value: 'mcgg' },
    { label: 'g (gramos)', value: 'g' },
    { label: 'L (litros)', value: 'litros' },
    { label: 'kg (kilogramos)', value: 'kg' },
    { label: 'mL (mililitros)', value: 'ml' },
    { label: 'Tabletas', value: 'tabletas' },
    { label: 'Cápsulas', value: 'capsulas' },
    { label: 'Gotas', value: 'gotas' },
    { label: 'Cucharaditas', value: 'cucharaditas' },
    { label: 'Cucharadas', value: 'cucharadas' },
    { label: 'Inhalaciones (para inhaladores)', value: 'inhalaciones' },
    { label: 'Rocíos (para aerosoles nasales)', value: 'rocios' },
    { label: 'UI (Unidades Internacionales)', value: 'ui' },
    { label: 'Parche', value: 'parche' },
    { label: 'Supositorio', value: 'supositorio' },
  ];

  async onSubmit(){
    if(this.prescriptionForm.valid){
      this.prescriptionService.createPrescription(this.prescriptionForm.value).then(async response=>{
        if(response.status === 200){
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2500,
            color: 'success',
            position: 'top',
          });
          await toast.present().finally(() => this.router.navigateByUrl(`doctor/patient/${this.patientId}`));


        }
        console.log(response);
      })
    }else {
      const toast = await this.toastController.create({
        message: 'Please fill all form inputs!',
        duration: 2500,
        color: 'danger',
        position: 'top',
      });
  
      await toast.present();
        }
    console.log(this.prescriptionForm);
  }

  ngOnInit() {
    this.medicationService.getAllMedication().then(response => {
      this.medications = response.data;
    })
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id') || "";
    });

    this.prescriptionForm.controls['patientId'].setValue(this.patientId);
    this.prescriptionForm.controls['doctorId'].setValue(sessionStorage.getItem('doctorId'));

  }

}
