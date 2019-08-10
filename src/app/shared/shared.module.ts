import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
    NopagefoundComponent,
    HeaderComponent
],
    exports: [
        NopagefoundComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
