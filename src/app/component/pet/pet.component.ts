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

  petHeight = "0px";

  petWidth = "0px";
  private resizeObserver: ResizeObserver | null = null;


  constructor() {
    afterNextRender(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.calculatePetSize();
      });

      this.resizeObserver.observe(this.container.nativeElement);
    }, {phase: AfterRenderPhase.Write});
  }

  triangleGradient(petoverview: Petoverview) {

    return "background-image:linear-gradient(to bottom right, transparent 50%, " + petoverview.appearance.color + " 0),linear-gradient(to top right, " + petoverview.appearance.color + " 50%, transparent 0);"
  }

  private calculatePetSize() {

    const containerWidth = this.container.nativeElement.clientWidth
    const containerHeight = this.container.nativeElement.clientHeight
    let petSize = containerWidth > containerHeight ? containerHeight : containerWidth;
    this.petHeight = petSize + "px";
    this.petWidth = petSize + "px";
    console.log(petSize)
  }
}
