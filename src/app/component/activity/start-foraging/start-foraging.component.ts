import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {createForaging} from "../../../store/actions/foraging.actions";
import {MatButton} from "@angular/material/button";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {Observable} from "rxjs";
import {ForagingState} from "../../../store/reducers/foraging.reducers";
import {AsyncPipe} from "@angular/common";
import {LoadingComponent} from "../../page/loading/loading.component";

@Component({
  selector: 'app-start-foraging',
  standalone: true,
  imports: [

    ReactiveFormsModule,
    MatButton,
    MatSlider,
    MatSliderThumb,
    AsyncPipe,
    LoadingComponent
  ],
  templateUrl: './start-foraging.component.html',
  styleUrl: './start-foraging.component.css'
})
export class StartForagingComponent {

  store = inject(Store)
  foragingMinutesFormControl: FormControl<number | null>;
  foraging$:Observable<ForagingState>


  constructor() {
    this.foraging$ = this.store.select('foraging')
    this.foragingMinutesFormControl = new FormControl(5);
  }

  startForaging() {
    this.store.dispatch(createForaging({duration: this.foragingMinutesFormControl.value!}));
  }
}
