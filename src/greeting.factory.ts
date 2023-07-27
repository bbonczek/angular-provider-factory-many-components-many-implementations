import { ChooseGreetingService } from './nursa-styles/choose-greeting.service';
import { Greeting } from './nursa-styles/greeting.interface';
import { EnglishGreetingSource } from './sources/english-greeting.service';
import { FrenchGreetingSource } from './sources/french-greeting.service';
import { PolishGreetingSource } from './sources/polish-greeting.service';

export type AvailableGreetings = 'pl' | 'en' | 'fr';

export const GreetingFactory = (
  chosseGreetingService: ChooseGreetingService<AvailableGreetings>
): Greeting => {
  switch (chosseGreetingService.chosenGreeting) {
    case 'pl':
      return PolishGreetingSource;
    case 'en':
      return EnglishGreetingSource;
    default:
      return FrenchGreetingSource;
  }
};
