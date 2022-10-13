import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceDetailComponent } from './component/place-detail/place-detail.component';
import { PlaceComponent } from './page/place/place.component';

const routes: Routes = [
  {path:"", component: PlaceComponent},
  {path: "places/:placeId", component: PlaceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
