import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, DeclarativeUserService } from './service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [UserService,DeclarativeUserService],
})
export class CoreUserModule {}
