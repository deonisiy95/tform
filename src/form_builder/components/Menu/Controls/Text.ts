import {ITextControl} from 'src/form_builder/@types/formBuilder';

export const initTextControl = (): ITextControl => ({
  type: 'text',
  value: l10n('enter.text')
});
