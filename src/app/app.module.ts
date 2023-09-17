import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllComponent } from './component/all/all.component';
import { RegisterComponent } from './component/register/register.component';
import { FindComponent } from './component/find/find.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms"
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LoadingComponent } from './component/loading/loading.component';
import { HttpManagerInterceptor } from './component/intercepters/http-manager.interceptor';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    RegisterComponent,
    FindComponent,
    UpdateComponent,
    DeleteComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpManagerInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
