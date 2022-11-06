import {IInputControl} from 'src/form_builder/@types/formBuilder';

export const initInputControl = (): IInputControl => ({
  type: 'input',
  value: {
    title: l10n('enter.title'),
    text: l10n('enter.text'),
    placeholder: l10n('enter.placeholder'),
    is_require: false,
  }
});
