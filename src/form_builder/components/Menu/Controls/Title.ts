import {ITitleControl} from 'src/form_builder/@types/formBuilder';

export const initTitleControl = (): ITitleControl => ({
  type: 'title',
  value: l10n('enter.title')
});
