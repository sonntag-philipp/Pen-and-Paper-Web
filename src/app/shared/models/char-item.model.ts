import {CharStatusModel} from "./char-status.model";

export interface CharItemModel {
  name: string;
  equipped: boolean;

  status: CharStatusModel;
}
