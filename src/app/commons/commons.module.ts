import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "../shared/shared.module";
import { StyleManagerService } from "./header/style-manager.service";

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from "./menu/menu.component";
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    AddComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [StyleManagerService]
})

export class CommonsModule {}