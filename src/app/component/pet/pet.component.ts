import {
  afterNextRender,
  afterRender,
  AfterRenderPhase,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  input,
  ViewChild
} from '@angular/core';
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
export class PetComponent implements AfterViewInit {

  pet = input.required<Petoverview>();

  @ViewChild('container') container !: ElementRef;

  @ViewChild('petElement') petElement !: ElementRef;

  petHeight = "0px";
  petWidth = "0px"
  private resizeObserver: ResizeObserver | null = null;


  constructor(private cd: ChangeDetectorRef) {
    afterRender(() => this.calculatePetSize())
    afterNextRender(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.calculatePetSize();
      });
      this.resizeObserver.observe(this.container.nativeElement);
    }, {phase: AfterRenderPhase.Write});
  }

  ngAfterViewInit(): void {
    // This updates pet size after everything has rendered by telling angular
    // to rerun change detection after setting the size.
    // This fixed the NG0100: Expression has changed after it was checked error message
    this.calculatePetSize();
    this.cd.detectChanges();
  }

  private calculatePetSize() {
    const containerWidth = this.container.nativeElement.clientWidth;
    const containerHeight = this.container.nativeElement.clientHeight;
    let petSize = containerWidth > containerHeight ? containerHeight : containerWidth;
    this.petHeight = petSize + "px";
    this.petWidth = petSize + "px"
  }
}
