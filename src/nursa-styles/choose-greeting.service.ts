import { Injectable } from '@angular/core';

@Injectable()
export class ChooseGreetingService<T> {
  chosenGreeting?: T;
}
