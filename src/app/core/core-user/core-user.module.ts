import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
})
export class CoreUserModule {}
