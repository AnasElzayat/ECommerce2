import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { DetailsComponent } from './components/details/details.component';
import { AddPrdComponent } from './components/add-prd/add-prd.component';

export const routes: Routes = [{path:'Home',component:OrderComponent},
{path:'admin/insertproduct',component:AddPrdComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'contactUs',component:ContactUsComponent},
{path:'products',component:OrderComponent},
{path:'details/:id',component:DetailsComponent},
{path:'',redirectTo:'Home',pathMatch:'full'},
{path:'**',component:NotFoundComponent},
];
