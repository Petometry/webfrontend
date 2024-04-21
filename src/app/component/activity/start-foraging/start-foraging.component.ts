import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {createForaging} from "../../../store/actions/foraging.actions";

@Component({
  selector: 'app-start-foraging',
  standalone: true,
  imports: [

    ReactiveFormsModule
  ],
  templateUrl: './start-foraging.component.html',
  styleUrl: './start-foraging.component.css'
})
export class StartForagingComponent {

  store = inject(Store)
  foragingMinutesFormControl: FormControl<number | null>;


  constructor() {

    this.foragingMinutesFormControl = new FormControl(5);
  }

  startForaging() {
    this.store.dispatch(createForaging({duration: this.foragingMinutesFormControl.value!}));
  }
}
