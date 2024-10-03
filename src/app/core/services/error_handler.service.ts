import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService extends ErrorHandler {
  constructor() {
    super();
  }

  override handleError(error: any): void {
    try {
      const exceptionType =
        error.name || error.constructor?.name || 'UnknownError';

      const errorMsg = error.stack
        ? error.stack
        : `${exceptionType}:${error.message || error.toString()}`;
      console.error(errorMsg);
    } catch (e) {
      super.handleError(e);
    }

    super.handleError(error);
  }
}
