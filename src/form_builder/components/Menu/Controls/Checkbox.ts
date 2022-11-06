import {ICheckBoxControl} from 'src/form_builder/@types/formBuilder';

export const initCheckboxControl = (): ICheckBoxControl => ({
  type: 'checkbox',
  value: {
    text:  l10n('enter.text'),
    is_require: false,
  }
});
