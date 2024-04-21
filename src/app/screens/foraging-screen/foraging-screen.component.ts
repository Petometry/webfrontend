import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {LoadingComponent} from "../../component/page/loading/loading.component";
import {ForagingActivityComponent} from "../../component/activity/foraging-activity/foraging-activity.component";
import {StartForagingComponent} from "../../component/activity/start-foraging/start-foraging.component";
import {AbstractActivityScreenComponent} from "../abstract-activity-screen.component";

@Component({
  selector: 'app-foraging-screen',
  standalone: true,
  imports: [
    AsyncPipe,
    LoadingComponent,
    ForagingActivityComponent,
    StartForagingComponent
  ],
  templateUrl: './foraging-screen.component.html',
  styleUrl: './foraging-screen.component.css'
})
export class ForagingScreenComponent extends AbstractActivityScreenComponent {

  constructor() {
    super();
  }
}
