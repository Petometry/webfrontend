import {PetModel} from "./pet.model";

export interface PetShopModel {
    "id": number,
    "pets": PetModel[],
    "ownerId": string,
    "validFor": Date
}
