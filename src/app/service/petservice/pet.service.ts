import {Injectable} from '@angular/core';
import {Petoverview} from "../../model/pet/petoverview";
import {HttpService} from "../httpservice/http.service";
import {Observable} from "rxjs";
import {PetShop} from "../../model/pet/petshop.service";
import {PetDetails} from "../../model/pet/petdetails";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpService: HttpService) {
  }

  private service = "pet";

  public buypet(petId: number): Observable<Petoverview> {

    return this.httpService.sendPostRequest(this.service, "pets/" + petId, null)
  }

  public getUserPets(): Observable<Petoverview[]> {

    return this.httpService.sendGetRequest(this.service, "pets")
  }

  public releasePet(petId: number): Observable<Petoverview> {

    return this.httpService.sendDeleteRequest(this.service, "pets/" + petId)
  }

  public getPetShop(): Observable<PetShop> {

    return this.httpService.sendGetRequest(this.service, "petshops")
  }

  getUserPet(number: number):Observable<PetDetails> {

    return this.httpService.sendGetRequest(this.service, "pets/" + number);
  }
}
