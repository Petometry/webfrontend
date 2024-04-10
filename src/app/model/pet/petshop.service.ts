import {Pet} from "./pet";

export interface PetShop {
    "id": number,
    "pets": Pet[],
    "ownerId": string,
    "validFor": Date
}
