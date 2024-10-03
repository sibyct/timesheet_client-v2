import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  error(msg: any, ...args: any[]) {
    console.error(msg, ...args);
  }

  info(msg: string, ...args: any[]) {
    console.info(msg, ...args);
  }

  log(msg: string, ...args: any[]) {
    console.log(msg, ...args);
  }
}
