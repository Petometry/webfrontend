import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Work} from "../../model/activity/work";
import {HttpService} from "../httpservice/http.service";
import {Activity} from "../../model/activity/activity";
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService:HttpService) { }

  getCurrentActivity():Observable<Activity|undefined> {

    return this.httpService.sendGetRequest("activity", "activities")
  }

  startWork(hoursToWork: number):Observable<Work> {
    let work = {duration: hoursToWork}
    return this.httpService.sendPostRequest("activity", "activities/work", work)
  }

  getWork():Observable<Work|undefined> {
    return this.getCurrentActivity().pipe(
    switchMap((activity: any) => {
      console.log(activity)
      if(activity != undefined){
        return this.httpService.sendGetRequest("activity", "activities/work")
      }
      return of({} as Work);
    }))
  }

  stopWork():Observable<undefined> {
    return this.httpService.sendDeleteRequest("activity", "activities/work");
  }
}
