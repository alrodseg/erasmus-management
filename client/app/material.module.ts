import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


const materialModules: Array<any> = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatListModule,
  FlexLayoutModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {
}
