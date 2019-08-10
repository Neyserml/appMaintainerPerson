
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// Route Components //
const appRoutes : Routes = [
    {path: ' ',component: HomeComponent},
    {path: '**', component: NopagefoundComponent},
];
export const APP_ROUTES=RouterModule.forRoot(appRoutes,{useHash:false});
