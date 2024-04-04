import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Activity} from "../../model/activity/activity";
import {HttpService} from "../httpservice/http.service";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService:HttpService) { }

  getCurrentActivity():Observable<Activity|undefined> {

    return this.httpService.sendGetRequest("activity", "activities")
  }

  startWork(hoursToWork: number):Observable<Activity> {
    let work = {duration: hoursToWork}
    return this.httpService.sendPostRequest("activity", "activities/work", work)
  }

  stopCurrentActivity():Observable<undefined> {
    return this.httpService.sendDeleteRequest("activity", "activities");
  }
}
