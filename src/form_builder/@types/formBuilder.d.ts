export type TForm = Array<TControl>;

export type TTypeControl = 'input' | 'text' | 'title';

export type TControl = ITextControl | ITitleControl | IInputControl;

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
  };
}
