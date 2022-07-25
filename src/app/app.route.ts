import { AppComponent } from "./app.component";
import { HomePageComponent } from './home-page/home-page.component'
import { Routes, RouterModule } from '@angular/router'
//import { PandemicMapComponent } from './pandemic-map/pandemic-map.component'




/**
 * defined main routes
 */

const appRoutes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "customers", loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule) }
]

export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });