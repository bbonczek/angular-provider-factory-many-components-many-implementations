import { Component, Inject, Input, Optional } from '@angular/core';
import { ChooseGreetingService } from './choose-greeting.service';
import { Greeting } from './greeting.interface';
import { GREETING_SOURCE } from './greeting.token';

@Component({
  selector: 'greeting-component',
  template: `{{greetingSource.greet()}}`,
  providers: [ChooseGreetingService],
  standalone: true,
})
export class GreetingComponent<T> {
  @Input() set factory(value: (service: ChooseGreetingService<T>) => Greeting) {
    this.greetingSource = value(this.chooseGreetingService);
  }

  @Input() set chosenGreeting(value: T) {
    this.chooseGreetingService.chosenGreeting = value;
  }

  constructor(
    @Inject(GREETING_SOURCE) @Optional() public greetingSource: Greeting,
    private chooseGreetingService: ChooseGreetingService<T>
  ) {}
}
