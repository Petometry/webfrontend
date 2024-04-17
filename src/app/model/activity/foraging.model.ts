import {PetfoodsModel} from "../currency/petfoods.model";
import {ActivityModel} from "./activity.model";

export interface ForagingModel extends ActivityModel{
  "reward": PetfoodsModel
}
