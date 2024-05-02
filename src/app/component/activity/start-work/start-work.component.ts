import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {createWork} from "../../../store/actions/work.actions";
import {Store} from "@ngrx/store";
import {MatButton} from "@angular/material/button";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {AsyncPipe} from "@angular/common";
import {LoadingComponent} from "../../page/loading/loading.component";
import {Observable} from "rxjs";
import {WorkState} from "../../../store/reducers/work.reducers";

@Component({
  selector: 'app-start-work',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        MatButton,
        MatSlider,
        MatSliderThumb,
        AsyncPipe,
        LoadingComponent
    ],
  templateUrl: './start-work.component.html',
  styleUrl: './start-work.component.css'
})


export class StartWorkComponent {

  store = inject(Store)
  workHoursFormControl: FormControl<number | null>;
  work$: Observable<WorkState>;


  constructor() {
    this.work$ = this.store.select("work")
    this.workHoursFormControl = new FormControl(10);
  }

  startWork() {
    this.store.dispatch(createWork({duration: this.workHoursFormControl.value!}));
  }
}

