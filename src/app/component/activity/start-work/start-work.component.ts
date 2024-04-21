import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {createWork} from "../../../store/actions/work.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-start-work',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './start-work.component.html',
  styleUrl: './start-work.component.css'
})


export class StartWorkComponent {

  store = inject(Store)
  workHoursFormControl: FormControl<number | null>;


  constructor() {

    this.workHoursFormControl = new FormControl(10);
  }

  startWork() {
    this.store.dispatch(createWork({duration: this.workHoursFormControl.value!}));
  }
}

