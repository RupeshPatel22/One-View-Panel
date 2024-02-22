import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material.module';
import { FormErrorMsgComponent } from './form-error-msg/form-error-msg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormErrorMsgComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormErrorMsgComponent],
})
export class ComponentsModule {}
