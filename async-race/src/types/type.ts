export type Path = '/garage' | '/engine' | '/winners';
export type OptionsStatus = 'started' | 'stopped';

export type Car = {
  name: string;
  color: string;
  id?: number;
};

export type Speed = {
  velocity: number;
  distance: number;
};

export type DataButtons = {
  name: string;
  id: string;
};
