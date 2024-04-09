import {Component, ViewChild} from '@angular/core';
import {ActivityService} from "../../service/activityservice/activity.service";
import {Work} from "../../model/activity/work";
import {LoadingComponent} from "../../component/loading/loading.component";
import {Activity} from "../../model/activity/activity";
import {Observer} from "rxjs";

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
export class WorkScreenComponent {

  activity: string | undefined
  work: Work | undefined
  protected workHours: number;
  @ViewChild('workhoursselect') workHourInput: any;

  constructor(private activityService: ActivityService) {
    let activityObserver: Observer<Activity> = {
      next: (activity: Activity) => this.activity = activity.type,
      error: (err: Error) => this.activity = "NONE",
      complete: () => console.log("Completed current activity getting")
    };
    this.activityService.getCurrentActivity().subscribe(activityObserver)

    let workObserver: Observer<Work> = {
      next: (work: Work) => {
        if (work.collectable){
          this.collectWork();
        }else {
          this.work = work
        }
      },
      error: (err: Error) => this.work = {} as Work,
      complete: () => console.log("Completed current work getting")
    };
    this.activityService.getWork().subscribe(workObserver)
    this.workHours = 10
  }

  private collectWork() {
    this.work = {} as Work
    this.activity = "NONE"
  }

  startWork() {
    this.activityService.startWork(this.workHours).subscribe(work => {
      this.work = work
      this.activity = "WORK"
    });
  }

  updateWorkValue(event: any) {
    let target = event.target;
    this.workHours = target.value;
  }

  stopWork() {
    this.activityService.stopWork().pipe().subscribe(() => {
      this.work = {} as Work
      this.activity = "NONE"
    });
  }
}
