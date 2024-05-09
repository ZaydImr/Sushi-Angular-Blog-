import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from '@env/environment.development';
import { ENV } from '@env/env';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// prevent inspection
if (environment.env != ENV.DEV) {
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
}