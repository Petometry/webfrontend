import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {LoadingComponent} from "../../page/loading/loading.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {collectForagingReward, deleteForaging} from "../../../store/actions/foraging.actions";
import {ForagingState} from "../../../store/reducers/foraging.reducers";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-foraging-activity',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    LoadingComponent,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent
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
