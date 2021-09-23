export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './meeting.service';
import { MeetingService } from './meeting.service';
export * from './vaccinecapacity.service';
import { VaccinecapacityService } from './vaccinecapacity.service';
export const APIS = [AuthenticationService, MeetingService, VaccinecapacityService];
