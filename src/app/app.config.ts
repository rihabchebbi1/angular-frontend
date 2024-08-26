import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app-routing.module'; // Import the routes array

export const appConfig = [
  provideHttpClient(),
  provideRouter(appRoutes), // Use the routes array here
];
