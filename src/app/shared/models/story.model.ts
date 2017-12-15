import {CharModel} from "./char.model";

export interface StoryModel {
  id: string;
  name: string;

  characters: CharModel[];
}
