import 'moment/locale/ru';
import moment from 'moment';

class Localization {
  private readonly dictionaries;
  private locale;

  constructor() {
    this.dictionaries = {
      en: require('src/l10n/dictionaries/en.json'),
      ru: require('src/l10n/dictionaries/ru.json')
    };

    this.locale = 'ru';
    moment.locale('ru');
  }

  public setLocale(locale: string): void {
    this.locale = locale;
    moment.locale(locale);
  }

  public translate(key: string): string {
    return this.dictionaries[this.locale][key];
  }
}

const localization = new Localization();

globalThis.l10n = (key: string): string => {
  return localization.translate(key);
};
