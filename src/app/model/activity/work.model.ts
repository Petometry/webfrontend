import {ActivityModel} from "./activity.model";

export interface WorkModel extends ActivityModel{
  "type" : "WORK",
  "reward" : number
}
