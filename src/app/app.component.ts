import { Component } from '@angular/core';
import { CoreLoaderService } from './core/core-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-fb-njrx';

  loading$ = this.loadingService.loadingActionSubject;

  constructor(private loadingService: CoreLoaderService) {}
}
