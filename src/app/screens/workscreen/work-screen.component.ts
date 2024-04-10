import {Component, inject, ViewChild} from '@angular/core';
import {ActivityService} from "../../service/activityservice/activity.service";
import {LoadingComponent} from "../../component/loading/loading.component";
import {Observable} from "rxjs";
import {ActivityState} from "../../reducers/activity.reducers";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {createWork, deleteWork, loadWork} from "../../actions/work.actions";
import {WorkState} from "../../reducers/work.reducers";

@Component({
  selector: 'app-workplace',
  standalone: true,
  imports: [LoadingComponent, AsyncPipe],
  templateUrl: './work-screen.component.html',
  styleUrl: './work-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class WorkScreenComponent {

  activity$?: Observable<ActivityState>
  store = inject(Store)
  work$: Observable<WorkState>
  protected workHours: number;
  @ViewChild('workhoursselect') workHourInput: any;

  constructor() {
    this.activity$ = this.store.select('activity')
    this.work$ = this.store.select('work')
    this.store.dispatch(loadWork());
    this.workHours = 10
  }

  startWork() {
    this.store.dispatch(createWork({duration: this.workHours}));
  }

  stopWork() {
    this.store.dispatch(deleteWork());
  }

  updateWorkValue(event: any) {
    let target = event.target;
    this.workHours = target.value;
  }
}
