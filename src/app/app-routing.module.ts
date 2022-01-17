import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './home/cart/cart.component';
import { CourseComponent } from './home/course/course.component';
import { CoursesComponent } from './home/courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { WishlistComponent } from './home/wishlist/wishlist.component';

const routes: Routes = [
  {path:"",component:CoursesComponent},
  {path:"Courses",component:CoursesComponent},
  {path:"Course",component:CourseComponent},
  {path:"Profile",component:ProfileComponent},
  {path:"Cart",component:CartComponent},
  {path:"MyWishlist",component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
