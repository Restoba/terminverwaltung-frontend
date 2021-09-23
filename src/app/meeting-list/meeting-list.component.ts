import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Meeting} from '../model/meeting';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  meeting$: Meeting[] | undefined;
  lastname: string | undefined;
  firstname: string | undefined;
  datetime: string | undefined;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    return this.dataService.getMeetings().subscribe(data => this.meeting$ = data)
  }

  addMeeting(lastname: string | undefined, firstname: string | undefined, datetime: string | undefined) {
    const body = {'lastname': this.lastname,  'firstname': this.firstname, 'meetingDateTime': this.datetime, 'status': 'aktiv' };
    return this.dataService.addMeeting(body).subscribe((result) => {
      this.ngOnInit()
    });
  }

  deleteMeeting(meeting: Meeting) {
    return this.dataService.deleteMeeting(meeting).subscribe((result) => {
      this.ngOnInit()
    });
  }
}
