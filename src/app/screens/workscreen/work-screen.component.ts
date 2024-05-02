import {Component} from '@angular/core';
import {LoadingComponent} from "../../component/page/loading/loading.component";
import {AsyncPipe} from "@angular/common";
import {StartWorkComponent} from "../../component/activity/start-work/start-work.component";
import {WorkActivityComponent} from "../../component/activity/work-activity/work-activity.component";
import {AbstractActivityScreenComponent} from "../abstract-activity-screen.component";
import {MatButton} from "@angular/material/button";
import {AnotherActivityComponent} from "../../component/activity/another-activity/another-activity.component";

@Component({
  selector: 'app-workplace',
  standalone: true,
  imports: [
    LoadingComponent, AsyncPipe, StartWorkComponent, WorkActivityComponent, MatButton, AnotherActivityComponent],
  templateUrl: './work-screen.component.html',
  styleUrl: './work-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class WorkScreenComponent extends AbstractActivityScreenComponent{

  constructor() {
    super()
  }
}
