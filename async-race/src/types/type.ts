export type Path = '/garage' | '/engine' | '/winners';
export type Category = 'garage' | 'engine' | 'winners';
export type OptionsStatus = 'started' | 'stopped' | 'drive';

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

export type DriveMode = {
  success: boolean;
};
