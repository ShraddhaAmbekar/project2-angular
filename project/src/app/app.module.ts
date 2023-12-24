import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { DataTransmissionComponent } from './data-transmission/data-transmission.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { SubComponent } from './sub/sub.component';
import { DirectivesComponent } from './directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProjectsComponent,
    DataTransmissionComponent,
    ParentComponent,
    ChildComponent,
    Sub1Component,
    Sub2Component,
    SubComponent,
    DirectivesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //import for two way databinding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
