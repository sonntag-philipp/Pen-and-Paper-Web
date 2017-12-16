import {CharModel} from "./char.model";

export class StoryModel {
  id: string;
  name: string;
  title: string;

  characters: CharModel[];
}
