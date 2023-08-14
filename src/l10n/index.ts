import 'moment/locale/ru';
import moment from 'moment';
import {localStorage} from 'src/core/scripts/localStorage';

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

    localStorage.getItem('locale').then(locale => {
      this.locale = locale ?? 'ru';
      moment.locale(locale ?? 'ru');
    });
  }

  public async setLocale(locale: string): Promise<void> {
    this.locale = locale;
    moment.locale(locale);
    await localStorage.setItem('locale', locale);
  }

  public getLocale(): string {
    return this.locale;
  }

  public translate(key: string): string {
    return this.dictionaries[this.locale][key];
  }
}

export const localization = new Localization();

globalThis.l10n = (key: string): string => {
  return localization.translate(key);
};
