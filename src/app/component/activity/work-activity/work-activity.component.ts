import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {collectWorkReward, deleteWork} from "../../../store/actions/work.actions";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {WorkState} from "../../../store/reducers/work.reducers";
import {LoadingComponent} from "../../page/loading/loading.component";

@Component({
  selector: 'app-work-activity',
  standalone: true,
  imports: [
    AsyncPipe,
    LoadingComponent,
    DatePipe
  ],
  templateUrl: './work-activity.component.html',
  styleUrl: './work-activity.component.css'
})
export class WorkActivityComponent {

  store = inject(Store)
  work$: Observable<WorkState>


  constructor() {
    this.work$ = this.store.select('work')
  }

  stopWork() {
    this.store.dispatch(deleteWork());
  }

  collectReward() {
    this.store.dispatch(collectWorkReward())
  }
}


