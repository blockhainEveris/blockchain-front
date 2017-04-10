// Styles
// SCSS
import './styles/scss/app.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app/app.module';

/*if (environment.production) {
  enableProdMode();
}*/

platformBrowserDynamic().bootstrapModule(AppModule);
