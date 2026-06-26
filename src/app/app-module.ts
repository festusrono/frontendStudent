import { Component, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { Header } from './header/header';
import { StudentForm } from './student-form/student-form';
import { StudentList } from './student-list/student-list';
import { ProjectList } from './project-list/project-list';
import { Assignment } from './assignment/assignment';



@NgModule({
  declarations: [App, Header, StudentForm, StudentList, ProjectList, Assignment],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient(), provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
