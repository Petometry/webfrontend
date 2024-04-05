import {Petoverview} from "./petoverview";

export interface PetShop {
    "id": number,
    "pets": Petoverview[],
    "ownerId": string,
    "validFor": Date
}
