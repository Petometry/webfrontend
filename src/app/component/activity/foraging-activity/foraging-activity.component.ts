import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {LoadingComponent} from "../../loading/loading.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {WorkState} from "../../../store/reducers/work.reducers";
import {collectWorkReward, deleteWork} from "../../../store/actions/work.actions";
import {collectForagingReward, deleteForaging} from "../../../store/actions/foraging.actions";
import {ForagingState} from "../../../store/reducers/foraging.reducers";

@Component({
  selector: 'app-foraging-activity',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    LoadingComponent
  ],
  templateUrl: './foraging-activity.component.html',
  styleUrl: './foraging-activity.component.css'
})
export class ForagingActivityComponent {
  store = inject(Store)
  foraging$: Observable<ForagingState>


  constructor() {
    this.foraging$ = this.store.select('foraging')
  }

  stopForaging() {
    this.store.dispatch(deleteForaging());
  }

  collectReward() {
    this.store.dispatch(collectForagingReward())
  }
}
