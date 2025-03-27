import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
export const appConfig = {
    providers: [provideExperimentalZonelessChangeDetection(), provideRouter(routes)]
};
