import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { IndependenceDayComponent } from './independence-day/independence-day.component';
import { DataTableComponent } from './data-table/data-table.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchSortListComponent } from './search-sort-list/search-sort-list.component';
import { NewDynamicFormComponent } from './new-dynamic-form/new-dynamic-form.component';
import { MaterialDataTableComponent } from './material-data-table/material-data-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HobbiesDynamicFormComponent } from './hobbies-dynamic-form/hobbies-dynamic-form.component';
import { SearchFilterPaginationComponent } from './search-filter-pagination/search-filter-pagination.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WeatherComponent } from './weather/weather.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableComponent } from './table/table.component';
import { DataTablePaginationComponent } from './data-table-pagination/data-table-pagination.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MyFormComponent } from './my-form/my-form.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { MatchingPasswordComponent } from './matching-password/matching-password.component';
import { EnoteMatchingPasswordComponent } from './enote-matching-password/enote-matching-password.component';
import { TitleCasePipe } from './title-case.pipe';
import { FeatureModule } from './feature/feature.module';
import { FeatureRoutingModule } from './feature/feature-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    ItemListComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    DynamicFormComponent,
    IndependenceDayComponent,
    DataTableComponent,
    SearchSortListComponent,
    NewDynamicFormComponent,
    MaterialDataTableComponent,
    LoginComponent,
    HomeComponent,
    HobbiesDynamicFormComponent,
    SearchFilterPaginationComponent,
    TodoListComponent,
    WeatherComponent,
    UserProfileComponent,
    TableComponent,
    DataTablePaginationComponent,
    DynamicFormArrayComponent,
    UserTableComponent,
    UserProfileFormComponent,
    FileUploadComponent,
    MyFormComponent,
    PhoneFormComponent,
    MatchingPasswordComponent,
    EnoteMatchingPasswordComponent,
    TitleCasePipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,FeatureModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
