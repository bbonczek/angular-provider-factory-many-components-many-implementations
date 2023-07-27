import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { GreetingComponent } from './nursa-styles/greeting.component';
import { GREETING_SOURCE } from './nursa-styles/greeting.token';
import { ChooseGreetingService } from './nursa-styles/choose-greeting.service';
import { AvailableGreetings, GreetingFactory } from './greeting.factory';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, GreetingComponent],
  providers: [
    ChooseGreetingService,
    {
      provide: GREETING_SOURCE,
      useFactory: GreetingFactory,
      deps: [ChooseGreetingService<AvailableGreetings>],
    },
  ],
  template: `
    <h1>Hello world</h1>
    <greeting-component></greeting-component>
    <greeting-component chosenGreeting="pl"></greeting-component>
    <greeting-component chosenGreeting="en"></greeting-component>
  `,
})
export class App {}

bootstrapApplication(App);
