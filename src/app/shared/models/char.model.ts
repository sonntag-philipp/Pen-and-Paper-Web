import {CharSkillModel} from "./char-skill.model";
import {CharStatusModel} from "./char-status.model";
import {CharItemModel} from "./char-item.model";

export class CharModel {
  ownerID: string;
  id: string;

  name: string;
  description: string;

  skills: CharSkillModel[] = [];
  stats: CharStatusModel[] = [];
  inventory: CharItemModel[] = [];
}
