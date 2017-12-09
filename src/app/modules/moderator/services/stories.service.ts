import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {StoryModel} from "../../../shared/models/story.model";

export class StoriesService extends DataSource<any> {

  private stories: StoryModel[];
  private subject: BehaviorSubject<StoryModel[]> = new BehaviorSubject<StoryModel[]>(this.stories);


  public add(story: StoryModel): void {
    this.stories.push(story);
  }

  public remove(story: StoryModel): void {
    this.stories.splice(this.stories.indexOf(story), 1);
    this.subject.next(this.stories.slice());
  }

  public set(stories: StoryModel[]): void {
    this.stories = stories;
    this.subject.next(this.stories.slice());
  }

  public updateSubject(): void {
    this.subject.next(this.stories.slice());
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void { }
}
