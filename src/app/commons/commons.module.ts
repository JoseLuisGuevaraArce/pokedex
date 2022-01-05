import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "../shared/shared.module";
import { StyleManagerService } from "./header/style-manager.service";

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [StyleManagerService]
})

export class CommonsModule {}