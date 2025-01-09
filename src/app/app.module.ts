import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InputComponent } from './input/input.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InputListComponent } from './input-list/input-list.component';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { JsonTojsonComponent } from './json-tojson/json-tojson.component';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    DetailComponent,
    SideBarComponent,
    InputComponent,
    MainPageComponent,
    InputListComponent,
    InputDetailComponent,
    JsonTojsonComponent,
    InputFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
