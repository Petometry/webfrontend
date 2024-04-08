import {afterNextRender, AfterRenderPhase, Component, ElementRef, input, ViewChild} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Petoverview} from "../../model/pet/petoverview";

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css'
})
export class PetComponent{

  pet = input.required<Petoverview>();

  @ViewChild('container') container !: ElementRef;

  @ViewChild('petElement') petElement !: ElementRef;

  petSize = "0px";
  private resizeObserver: ResizeObserver | null = null;


  constructor() {
    afterNextRender(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.calculatePetSize();
      });

      this.resizeObserver.observe(this.container.nativeElement);
    }, {phase: AfterRenderPhase.Write});
  }

  private calculatePetSize() {

    const containerWidth = this.container.nativeElement.clientWidth
    const containerHeight = this.container.nativeElement.clientHeight
    let petSize = containerWidth > containerHeight ? containerHeight : containerWidth;
    this.petSize = petSize + "px";
  }
}
