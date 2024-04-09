import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Work} from "../../model/activity/work";
import {HttpService} from "../httpservice/http.service";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService:HttpService) { }

  getCurrentActivity():Observable<Work|undefined> {

    return this.httpService.sendGetRequest("activity", "activities")
  }

  startWork(hoursToWork: number):Observable<Work> {
    let work = {duration: hoursToWork}
    return this.httpService.sendPostRequest("activity", "activities/work", work)
  }

    getWork():Observable<Work|undefined> {
    return this.httpService.sendGetRequest("activity", "activities/work")
  }

  stopCurrentActivity():Observable<undefined> {
    return this.httpService.sendDeleteRequest("activity", "activities");
  }
}
