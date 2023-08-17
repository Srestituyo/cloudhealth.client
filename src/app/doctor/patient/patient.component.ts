import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent  implements OnInit {

  constructor(private route: ActivatedRoute) { }
  patientId: string = "";
  selectedSegment: string = 'prescription';

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  ngOnInit():void {
     // Read the parameter from the route
     this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id') || "";
    });
  }

}
