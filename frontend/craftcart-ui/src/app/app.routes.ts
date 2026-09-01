import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { ShopComponent } from './pages/shop/shop';
import { OrdersComponent } from './pages/orders/orders';
import { CartComponent } from './pages/cart/cart';
import { ContactComponent } from './pages/contact/contact';
import { CheckoutComponent } from './pages/checkout/checkout';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'order-confirmation',
        component: OrderConfirmationComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
