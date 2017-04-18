import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
  ],
  declarations: [
    ContatoComponent
  ],
  exports: [ ContatoComponent ]
})
export class ContatoModule {
}
