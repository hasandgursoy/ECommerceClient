import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';


// Eğer bir modül baka bir modülü kullanacaksa import etmesi gerekir.
// Eğer bir componenti kullanmak istiyorsak ana modüle declare etmemiz gerekiyor.
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ],
  exports:[
    LayoutModule,
    ComponentsModule
  ]
})
export class AdminModule { }
