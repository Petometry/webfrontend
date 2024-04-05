import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ActivityService} from "../../service/activityservice/activity.service";
import {Activity} from "../../model/activity/activity";

@Component({
  selector: 'app-workplace',
  standalone: true,
  imports: [],
  templateUrl: './work-screen.component.html',
  styleUrl: './work-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class WorkScreenComponent implements AfterViewInit{

  activity: Activity | undefined
  protected workHours: number;
  @ViewChild('workhoursselect') workHourInput: any;

  constructor(private activityService: ActivityService) {
    activityService.getCurrentActivity().subscribe(activity => this.activity = activity)
    this.workHours = 0
  }

  ngAfterViewInit() {
    this.workHours = this.workHourInput.nativeElement.value
  }

  startWork() {
    this.activityService.startWork(this.workHours).subscribe(activity => this.activity = activity);
  }

  updateWorkValue(event: any) {
    let target = event.target;
    this.workHours = target.value;
  }

  stopActivity() {
    this.activityService.stopCurrentActivity().pipe().subscribe(this.activity = undefined);
  }
}