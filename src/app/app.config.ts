import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ErrorHandler } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

import { ErrorHandlerService } from './core/services/error_handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
};
