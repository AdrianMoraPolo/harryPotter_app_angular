import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// Components
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'profile/:id', component: ProfileComponent},
   {path: '**', redirectTo: ''},
];

@NgModule({
   imports:[RouterModule.forRoot(routes)],
   exports:[RouterModule]
})
export class AppRoutingModule {}
