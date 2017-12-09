import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";

export class ModeratorHomeStoriesDatasource extends DataSource<any> {

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return undefined;
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
