import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AddProductComponent } from './components/add-product';
import { AddProductContainerComponent } from './containers/add-product-container';
import { reducers } from './reducers';

const COMPONENTS = [
    AddProductComponent,
    AddProductContainerComponent
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AddProductContainerComponent },
        ]),
        /**
         * StoreModule.forFeature is used for composing state
         * from feature modules. These modules can be loaded
         * eagerly or lazily and will be dynamically added to
         * the existing state.
         */
        StoreModule.forFeature('products', reducers),

        /**
         * Effects.forFeature is used to register effects
         * from feature modules. Effects can be loaded
         * eagerly or lazily and will be started immediately.
         *
         * All Effects will only be instantiated once regardless of
         * whether they are registered once or multiple times.
         */
        EffectsModule.forFeature([]),
        CommonModule,
    ],
    declarations: COMPONENTS,
    providers: [],
    exports: COMPONENTS
})
export class ProductsModule { }
