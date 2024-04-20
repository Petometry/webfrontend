import {Component, inject} from '@angular/core';
import {LoadingComponent} from "../../component/page/loading/loading.component";
import {Observable} from "rxjs";
import {ActivityState} from "../../store/reducers/activity.reducers";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';
import {StartWorkComponent} from "../../component/activity/start-work/start-work.component";
import {WorkActivityComponent} from "../../component/activity/work-activity/work-activity.component";
import {loadActivity} from "../../store/actions/activity.actions";

@Component({
  selector: 'app-workplace',
  standalone: true,
  imports: [LoadingComponent, AsyncPipe, ReactiveFormsModule, StartWorkComponent, WorkActivityComponent],
  templateUrl: './work-screen.component.html',
  styleUrl: './work-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class WorkScreenComponent {

  activity$?: Observable<ActivityState>
  store = inject(Store)

  constructor() {
    this.activity$ = this.store.select('activity')
    this.store.dispatch(loadActivity())
  }
}
