import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnailLogComponent, SnailLogDialogComponent } from './snail-log/snail-log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';


const appRoutes: Routes = [
  { path: '', component: SnailLogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SnailLogComponent,
    SnailLogDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SnailLogDialogComponent
  ]
})
export class AppModule { }
