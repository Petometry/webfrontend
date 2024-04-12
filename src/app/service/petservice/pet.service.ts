import {Injectable} from '@angular/core';
import {PetModel} from "../../model/pet/pet.model";
import {HttpService} from "../httpservice/http.service";
import {Observable} from "rxjs";
import {PetShopModel} from "../../model/pet/petshop.model";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpService: HttpService) {
  }

  private service = "pet";

  public createPet(petId: number): Observable<PetModel> {

    return this.httpService.sendPostRequest(this.service, "pets/" + petId, null)
  }

  public getPets(): Observable<PetModel[]> {

    return this.httpService.sendGetRequest(this.service, "pets")
  }

  public deletePet(petId: number): Observable<PetModel> {

    return this.httpService.sendDeleteRequest(this.service, "pets/" + petId)
  }

  public getPetShop(): Observable<PetShopModel> {

    return this.httpService.sendGetRequest(this.service, "petshops")
  }

  getPet(id:number): Observable<PetModel> {

    return this.httpService.sendGetRequest(this.service, "pets/"+ id)
  }
}
