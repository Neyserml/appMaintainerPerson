
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})
export class PagesModule { }
