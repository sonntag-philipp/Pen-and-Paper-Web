import {NgModule} from "@angular/core";
import {AngularFireModule} from "angularfire2";

const config = {
  apiKey: "AIzaSyANDwgBM0vEPWIFdZormgZ9ko_cf83RV5M",
  authDomain: "pen-and-paper-dce46.firebaseapp.com",
  databaseURL: "https://pen-and-paper-dce46.firebaseio.com",
  storageBucket: "pen-and-paper-dce46.appspot.com",
  messagingSenderId: "662999115964",
  projectId: "pen-and-paper-dce46"
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
