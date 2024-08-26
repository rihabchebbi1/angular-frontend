import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, { providers: appConfig })
  .catch((err) => console.error('Error bootstrapping the application:', err));
