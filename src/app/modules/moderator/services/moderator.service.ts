import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {StoryModel} from "../../../shared/models/story.model";

@Injectable()
export class ModeratorService {

  public stories: StoryModel[];
  public username: string;
  private _sessionID: string;

  public sessionID(): string {
    return this._sessionID;
  }

  public authenticate(username: string, password: string): void {

  }

  public invalidate(): void {

  }

}
