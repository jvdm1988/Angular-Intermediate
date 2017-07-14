import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
// You need "FormsModule" to use "ngModel" in your components

import { Routes, RouterModule } from "@angular/router";
// You need " Routes" to set up fake pages in angular
// (If you created the app with "--routing", it will already be here)

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuoteItemComponent } from './quote-stuff/quote-item/quote-item.component';
import { QuoteListComponent } from './quote-stuff/quote-list/quote-list.component';
import { ContactListComponent } from './contact-stuff/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-stuff/contact-details/contact-details.component';

// each item of this array represents one "page" in our app
const myRoutes: Routes = [
  // path take the URL of the fake pages
  // Component to be displayed when you visit that pages
  // leaving the string blank is same as / in express (homepage)
  {path: "", component: QuoteListComponent },
  // Takes you to the form page which will display the FormsComponent
  {path: "forms", component: FormsComponent },
  {path: "contacts", component: ContactListComponent},
  {path: "contacts/:myId", component: ContactDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuoteItemComponent,
    QuoteListComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                   // You need FormsModule here for it to work
    RouterModule.forRoot(myRoutes) // Finishes the connection between
                                   // the app and our routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
