import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WarningComponent } from "./components/warningComponent/warning.component";
import { SuccessComponentComponent } from './components/success-component/success-component.component';

@NgModule({
  declarations: [AppComponent, WarningComponent, SuccessComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
