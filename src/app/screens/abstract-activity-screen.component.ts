import {inject} from '@angular/core';
import {interval, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {loadActivity} from "../store/actions/activity.actions";
import {ActivityState} from "../store/reducers/activity.reducers";


export abstract class AbstractActivityScreenComponent {

  activity$?: Observable<ActivityState>
  activity: ActivityState|undefined
  store = inject(Store)

  constructor() {
    this.activity$ = this.store.select('activity')
    this.activity$.subscribe(activity => this.activity = activity)
    this.store.dispatch(loadActivity())
    interval(5000).subscribe(() => {
      if (new Date(this.activity?.activity?.endTime!).getTime() <= new Date().getTime()&& !this.activity?.activity?.collectable){
        let audio = new Audio()
        audio.src = "../../../assets/sounds/reward.mp3"
        audio.load()
        audio.play().finally(()=>this.store.dispatch(loadActivity()))
      }
    })
  }
}
