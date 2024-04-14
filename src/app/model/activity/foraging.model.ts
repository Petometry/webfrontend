import {PetfoodsModel} from "../currency/petfoods.model";

export interface ForagingModel {
  collectable: boolean;
  "startTime": Date,
  "endTime": Date,
  "reward": PetfoodsModel
}
