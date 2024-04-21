import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {LoadingComponent} from "../../component/page/loading/loading.component";
import {StartWorkComponent} from "../../component/activity/start-work/start-work.component";
import {WorkActivityComponent} from "../../component/activity/work-activity/work-activity.component";
import {interval, Observable} from "rxjs";
import {ActivityState} from "../../store/reducers/activity.reducers";
import {Store} from "@ngrx/store";
import {ForagingActivityComponent} from "../../component/activity/foraging-activity/foraging-activity.component";
import {StartForagingComponent} from "../../component/activity/start-foraging/start-foraging.component";
import {loadActivity} from "../../store/actions/activity.actions";

@Component({
  selector: 'app-foraging-screen',
  standalone: true,
  imports: [
    AsyncPipe,
    LoadingComponent,
    StartWorkComponent,
    WorkActivityComponent,
    ForagingActivityComponent,
    StartForagingComponent
  ],
  templateUrl: './foraging-screen.component.html',
  styleUrl: './foraging-screen.component.css'
})
export class ForagingScreenComponent {

  activity$?: Observable<ActivityState>
  activity: ActivityState|undefined
  store = inject(Store)

  constructor() {
    this.activity$ = this.store.select('activity')
    this.activity$.subscribe(activity => this.activity = activity)
    this.store.dispatch(loadActivity())
    interval(1000).subscribe(() => {
      if (new Date(this.activity?.activity?.endTime!).getTime() <= new Date().getTime()&& !this.activity?.activity?.collectable){
        this.store.dispatch(loadActivity())
      }
    })
  }
}
