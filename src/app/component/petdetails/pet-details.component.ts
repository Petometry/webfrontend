import {Component, input, OnInit} from '@angular/core';
import {Petoverview} from "../../model/pet/petoverview";
import {PetService} from "../../service/petservice/pet.service";
import {PetComponent} from "../pet/pet.component";
import {Router} from "@angular/router";
import {Observer} from "rxjs";
import {PetDetails} from "../../model/pet/petdetails";
import {LoadingComponent} from "../loading/loading.component";

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [
    PetComponent,
    LoadingComponent
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnInit {

  petId = input.required<number>();
  protected pet: Petoverview | undefined;


  constructor(private petService: PetService, private router: Router) {
  }

  ngOnInit(): void {

    const observer: Observer<PetDetails> = {
      error: () => this.router.navigateByUrl("/game"),
      next: (pet: PetDetails) => this.pet = pet,
      complete: () => console.log("Completed")
    }
    this.petService.getUserPet(this.petId()).subscribe(observer)
  }
}
