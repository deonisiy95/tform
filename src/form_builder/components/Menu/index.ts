import {TControl, TTypeControl} from 'src/form_builder/@types/formBuilder';
import {initInputControl} from 'src/form_builder/components/Menu/Controls/Input';
import {initTextControl} from 'src/form_builder/components/Menu/Controls/Text';
import {initTitleControl} from 'src/form_builder/components/Menu/Controls/Title';
import {initCheckboxControl} from 'src/form_builder/components/Menu/Controls/Checkbox';
import {initSelectControl} from 'src/form_builder/components/Menu/Controls/Select';

export const initControl = (type: TTypeControl): TControl => {
  switch (type) {
    case 'input':
      return initInputControl();
    case 'text':
      return initTextControl();
    case 'title':
      return initTitleControl();
    case 'checkbox':
      return initCheckboxControl();
    case 'select':
      return initSelectControl();
  }
};
