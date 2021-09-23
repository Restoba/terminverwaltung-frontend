import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  passwort: any;
  rolle: any;

  constructor(private dataService: DataService) {
  }

  login(username: string, passwort:string, rolle:string) {
    return this.dataService.getAuth(username,passwort,rolle).subscribe();
  }

  ngOnInit(): void {
  }

}
