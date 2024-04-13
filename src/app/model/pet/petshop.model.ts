import {PetModel} from "./pet.model";

export interface PetShopModel {
    "pets": PetModel[],
    "ownerId": string,
    "validFor": Date
}
