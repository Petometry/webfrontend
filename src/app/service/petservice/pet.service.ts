import {Injectable} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {HttpService} from "../httpservice/http.service";
import {Observable} from "rxjs";
import {PetShop} from "../../model/pet/petshop.service";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpService: HttpService) {
  }

  private service = "pet";

  public buypet(petId: number): Observable<Pet> {

    return this.httpService.sendPostRequest(this.service, "pets/" + petId, null)
  }

  public getUserPets(): Observable<Pet[]> {

    return this.httpService.sendGetRequest(this.service, "pets")
  }

  public releasePet(petId: number): Observable<Pet> {

    return this.httpService.sendDeleteRequest(this.service, "pets/" + petId)
  }

  public getPetShop(): Observable<PetShop> {

    return this.httpService.sendGetRequest(this.service, "petshops")
  }
}
