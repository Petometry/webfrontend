import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ActivityService} from "../../service/activityservice/activity.service";
import {Work} from "../../model/activity/work";
import {Activity} from "../../model/activity/activity";
import {LoadingComponent} from "../loading/loading.component";

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

  work: Work | undefined
  protected workHours: number;
  @ViewChild('workhoursselect') workHourInput: any;

  constructor(private activityService: ActivityService) {
    activityService.getCurrentActivity().subscribe(activity => {
      if(activity != undefined){
        activityService.getWork().subscribe(work => this.work = work);
      }else{
        this.work = undefined;
      }
    });
    
    this.workHours = 0
  }

  ngAfterViewInit() {
    this.workHours = this.workHourInput.nativeElement.value
  }

  startWork() {
    this.activityService.startWork(this.workHours).subscribe(work => this.work = work);
  }

  updateWorkValue(event: any) {
    let target = event.target;
    this.workHours = target.value;
  }

  stopWork() {
    this.activityService.stopWork().pipe().subscribe(this.work = undefined);
  }
}
