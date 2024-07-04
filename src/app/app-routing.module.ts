import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { UserComponent } from './shared/components/users/user/user.component';

const route: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Dashboard'
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products',
        children: [
            {
                path: 'addProduct',
                component: EditProductComponent
            },
            {
                path: ':prodId',
                component: ProductComponent
            },
            {
                path: ':prodId/edit',
                component: EditProductComponent
            }
        ]
    },
    {
        path: 'users',
        component: UsersComponent,
        title: 'Users',
        children: [
            {
                path: 'addUser',
                component: EditUserComponent
            },
            {
                path: ':userId',
                component: UserComponent
            },
            {
                path: ':userId/edit',
                component: EditUserComponent
            }
        ]
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent,
        data : {
            msg : 'Page not found !!! using static data'
        }
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    }
]


@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
