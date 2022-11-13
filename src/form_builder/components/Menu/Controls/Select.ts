import {ISelectControl} from 'src/form_builder/@types/formBuilder';

export const initSelectControl = (): ISelectControl => ({
  type: 'select',
  value: {
    title: l10n('enter.title'),
    text: '',
    options: ['option 1'],
    is_require: false,
  }
});
