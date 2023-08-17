import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient/patient.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.page.html',
  styleUrls: ['./pharmacy.page.scss'],
})
export class PharmacyPage implements OnInit {

  constructor(private patientService:PatientService, private router:Router) { }

  public data:  Array<any> = [];

  public results = [...this.data];

  handleInput(event:any) {
      const query = event.target.value.toLowerCase();
      this.results =  this.data.filter(d => 
        d.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || 
        d.lastName.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
  }

  onSelectPatient(patientId:number){
    this.router.navigateByUrl(`pharmacy/patient/${patientId}`)
  }
  ngOnInit() {
    this.patientService.getAllPatient().then(response => {
      console.log(response);
       this.data = response.data;
       this.results = response.data;
    })

  }

}

