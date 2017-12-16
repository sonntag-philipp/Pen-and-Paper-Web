import {NgModule} from "@angular/core";
import {AngularFireModule} from "angularfire2";

const config = {
  apiKey: "AIzaSyAteMUr1ta8zAND_2lGBidlyARACJ12fLA",
  authDomain: "pen-and-paper-5ebfe.firebaseapp.com",
  databaseURL: "https://pen-and-paper-5ebfe.firebaseio.com",
  storageBucket: "pen-and-paper-dce46.appspot.com",
  messagingSenderId: "860752437637",
  projectId: "pen-and-paper-5ebfe"
};

@NgModule({
  exports: [
    AngularFireModule
  ],
  imports: [
    AngularFireModule.initializeApp(config),
  ]
})
export class AppFirebaseModule {

}
