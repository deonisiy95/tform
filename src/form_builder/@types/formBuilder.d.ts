export type TForm = Array<TControl>;

export type TTypeControl = 'input' | 'text' | 'title' | 'checkbox' | 'select';

export type TControl =
  | ITextControl
  | ITitleControl
  | IInputControl
  | ICheckBoxControl
  | ISelectControl;

export type TCanRequireControl = IInputControl | ICheckBoxControl;

export interface ITextControl {
  type: 'text';
  value: string;
}

export interface ITitleControl {
  type: 'title';
  value: string;
}

export interface IInputControl {
  type: 'input';
  value: {
    title: string;
    text: string;
    placeholder: string;
    is_require: boolean;
    is_multiline: boolean;
  };
}

export interface ISelectControl {
  type: 'select';
  value: {
    title: string;
    text: string;
    options: string[];
    is_require: boolean;
  };
}

export interface ICheckBoxControl {
  type: 'checkbox';
  value: {
    text: string;
    is_require: boolean;
  };
}

export interface IFormData {
  widgetId: string;
  config: string;
}
