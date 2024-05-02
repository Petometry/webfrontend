import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {loadActivity} from "../store/actions/activity.actions";
import {ActivityState} from "../store/reducers/activity.reducers";


@Component({
  template: '',
  selector: 'abstract-activity-screen'
})
export abstract class AbstractActivityScreenComponent implements OnInit, OnDestroy {

  activity$: Observable<ActivityState>
  activity: ActivityState | undefined
  rewardSound$
  notified: boolean
  store = inject(Store)
  rewardSound;
  private rewardSoundSubscribe: Subscription;

  protected constructor() {
    this.rewardSound = new Audio()
    this.rewardSound.src = "../../../assets/sounds/reward.mp3"
    this.rewardSound.load()
    this.rewardSound$ = interval(5000)
    this.rewardSoundSubscribe = this.rewardSound$.subscribe(() => this.checkActivityFinished());
    this.activity$ = this.store.select('activity')
    this.notified = false
    this.store.dispatch(loadActivity())
  }

  ngOnInit(): void {
    this.activity$.subscribe(activity => this.activity = activity)
  }

  private checkActivityFinished() {
    if (new Date(this.activity?.activity?.endTime!).getTime() <= new Date().getTime() && !this.activity?.activity?.collectable && !this.notified) {
      this.rewardSound.play().finally(() => {
        this.store.dispatch(loadActivity())
        this.notified = true
      })
    }
  }

  ngOnDestroy() {
    this.rewardSoundSubscribe.unsubscribe()
  }
}
