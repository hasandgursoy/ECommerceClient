import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    // Dışarıdan ulaşılabilir bir component olduğunu bildirdik.
    LayoutComponent
  ]
})
export class LayoutModule { }
