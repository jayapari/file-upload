import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule,TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HeaderComponent } from './header/header.component';
// import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";  
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegServiceService } from './reg-service.service';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//material
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CarouselComponent } from './carousel/carousel.component';
import { RegistrationComponent } from './registration/registration.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { EditorComponent } from './editor/editor.component';
import { NgxEditorModule } from "ngx-editor";
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { Editor1Component } from './editor1/editor1.component';
import { FileComponent } from './file/file.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path:'',
    component: CarouselComponent
  },
  {
    path:'editor1',
    component: Editor1Component
  }
]



 export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
   }
  // export function HttpLoaderFactory(http: HttpClient) {  
    // return new MultiTranslateHttpLoader(http, [  
      // { prefix: "./assets/i18n/menu/", suffix: ".json"} 
    // ]);  
  // }  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleComponent,
    SearchBarComponent,
    HeaderComponent,
    CarouselComponent,
    RegistrationComponent,
    FileUploadComponent,
    EditorComponent,
    ScrollbarComponent,
    Editor1Component,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    NgxEditorModule,
    



    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      }),

    BrowserAnimationsModule
  ],
  exports: [TranslateModule],
  providers: [TranslateService,RegServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
