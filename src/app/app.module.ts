import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './home/courses/courses.component';
import { WishlistComponent } from './home/wishlist/wishlist.component';
import { ProfileComponent } from './home/profile/profile.component';
import { CourseComponent } from './home/course/course.component';
import { CartComponent } from './home/cart/cart.component';
import { ButtonComponent } from './Elements/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseTileComponent } from './home/courses/course-tile/course-tile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CoursesComponent,
    WishlistComponent,
    ProfileComponent,
    CourseComponent,
    CartComponent,
    ButtonComponent,
    CourseTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
