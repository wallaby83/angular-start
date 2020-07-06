import { PersistStateModule } from './modules/persist-state/persist-state.module';
import { SharedModule } from './modules/shared/shared.module';
import { ViewFooterComponent } from './components/view-footer/view-footer.component';
import { ViewWrapperComponent } from './components/view-wrapper/view-wrapper.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewHeaderComponent } from './components/view-header/view-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHeaderComponent,
    ViewWrapperComponent,
    ViewFooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    PersistStateModule.forRoot(),
    //ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
