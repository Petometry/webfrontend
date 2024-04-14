import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {WorkModel} from "../../model/activity/work.model";
import {HttpService} from "../httpservice/http.service";
import {ActivityModel} from "../../model/activity/activity.model";
import {ForagingModel} from "../../model/activity/foraging.model";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService:HttpService) { }

  getCurrentActivity():Observable<ActivityModel> {

    return this.httpService.sendGetRequest("activity", "activities")
  }

  startWork(hoursToWork: number):Observable<WorkModel> {
    let work = {duration: hoursToWork}
    return this.httpService.sendPostRequest("activity", "activities/work", work)
  }

  getWork():Observable<WorkModel> {
    return this.httpService.sendGetRequest("activity", "activities/work")

  }

  stopWork():Observable<WorkModel> {
    return this.httpService.sendDeleteRequest("activity", "activities/work");
  }

  collectWork() {
    return this.httpService.sendPutRequest("activity", "activities/work/collectable", '');
  }

  startForaging(minutesToForage: number):Observable<ForagingModel> {
    let foraging = {duration: minutesToForage}
    return this.httpService.sendPostRequest("activity", "activities/foraging", foraging)
  }

  getForaging():Observable<ForagingModel> {
    return this.httpService.sendGetRequest("activity", "activities/foraging")

  }

  stopForaging():Observable<ForagingModel> {
    return this.httpService.sendDeleteRequest("activity", "activities/foraging");
  }

  collectForaging() {
    return this.httpService.sendPutRequest("activity", "activities/foraging/collectable", null);
  }
}
