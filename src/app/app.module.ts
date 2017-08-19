import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdCommonModule,
  MdDatepickerModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdTableModule,
  MdToolbarModule
} from '@angular/material';
import {PostService} from './core/services/post.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from 'app/app-routing.module';
import {CdkTableModule} from '@angular/cdk';
import {ListPostsComponent} from './core/components/list-posts.component';
import {InfoPostComponent} from './core/components/info-post.component';
import {MainComponent} from './core/components/main.component';
import {DeletePostComponent} from './core/components/delete-post.component';
import {AddPostComponent} from 'app/core/components/add-post.component';
import {EditPostComponent} from './core/components/edit-post.component';

@NgModule({
  declarations: [
    MainComponent, ListPostsComponent, InfoPostComponent,
    DeletePostComponent, AddPostComponent, EditPostComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, FormsModule,
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule,
    MdInputModule, MdDatepickerModule, MdNativeDateModule, MdListModule,
    MdIconModule, MdToolbarModule, MdProgressSpinnerModule, MdTableModule,
    MdCommonModule, CdkTableModule, MdCardModule, MdDialogModule, MdSnackBarModule
  ],
  providers: [PostService, HttpModule],
  bootstrap: [MainComponent],
  entryComponents: [DeletePostComponent]
})
export class AppModule {
}
