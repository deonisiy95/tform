export type TForm = Array<TControl>;

export type TTypeControl = 'input' | 'text' | 'title';

export type TBaseControl = {
  type: TTypeControl;
  require?: boolean;
};

export type TControl = TTextControl | TTitleControl;

type TTextControl = TBaseControl & {
  value: string;
};

type TTitleControl = TBaseControl & {
  value: string;
};

type TInputControl = {
  value: string;
};
