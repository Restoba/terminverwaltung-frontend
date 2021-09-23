import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Vaccinecapacity } from '../model/vaccinecapacity';

@Component({
  selector: 'app-vaccinecapacity-list',
  templateUrl: './vaccinecapacity-list.component.html',
  styleUrls: ['./vaccinecapacity-list.component.css']

})
export class VaccinecapacityListComponent {

  vaccinecapacity$: Vaccinecapacity[] | undefined;

  constructor(private dataService:DataService) {
  }

  ngOnInit(){
    return this.dataService.getVaccinecapacitys().subscribe(data => this.vaccinecapacity$ = data)
  }

  addVaccinecapacity(vacc: Vaccinecapacity){
    // @ts-ignore
    return this.dataService.addVaccinecapacitys(vacc).subscribe();
  }

  subVaccinecapacity(vacc: Vaccinecapacity){
    // @ts-ignore
    return this.dataService.subVaccinecapacitys(vacc).subscribe();
  }
}
