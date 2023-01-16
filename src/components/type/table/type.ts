export interface ISubHeader {
  id: string | number;
  label: string;
  colSpan: string | number;
}

export interface IMainHeader {
  id: string | number;
  label: string;
  align?: string;
  minWidth?: number;
  button?: boolean;
  comma?: boolean;
}
