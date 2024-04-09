import {Component, ViewChild} from '@angular/core';
import {ActivityService} from "../../service/activityservice/activity.service";
import {Work} from "../../model/activity/work";
import {LoadingComponent} from "../../component/loading/loading.component";

@Component({
  selector: 'app-workplace',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './work-screen.component.html',
  styleUrl: './work-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class WorkScreenComponent{

  work: Work | undefined
  protected workHours: number;
  @ViewChild('workhoursselect') workHourInput: any;

  constructor(private activityService: ActivityService) {
    activityService.getWork().subscribe(work => this.work = work)
    this.workHours = 10
  }

  startWork() {
    this.activityService.startWork(this.workHours).subscribe(work => this.work = work);
  }

  updateWorkValue(event: any) {
    let target = event.target;
    this.workHours = target.value;
  }

  stopWork() {
    this.activityService.stopWork().pipe().subscribe(() => this.work = {} as Work);
  }
}
