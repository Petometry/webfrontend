import {Component, OnInit} from '@angular/core';
import {Petoverview} from "../../model/pet/petoverview";
import {PetService} from "../../service/petservice/pet.service";
import {PetComponent} from "../pet/pet.component";
import {Router} from "@angular/router";
import {LoadingComponent} from "../loading/loading.component";

@Component({
  selector: 'app-pets-overview',
  standalone: true,
  imports: [
    PetComponent,
    LoadingComponent
  ],
  templateUrl: './pets-overview.component.html',
  styleUrl: './pets-overview.component.css'
})
export class PetsOverviewComponent implements OnInit{

  protected pets: Petoverview[] | undefined;

  constructor(private petService: PetService, private router: Router ) {
  }

  ngOnInit(): void {
    this.petService.getUserPets().subscribe((pets: Petoverview[]) => this.pets = pets)
  }

  showPetDetails(event: MouseEvent){
    let target = event.target as Element;
  this.router.navigateByUrl("/game/pets/" + target.id)
  }
}
