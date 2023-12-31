export type OptionsStatus = 'started' | 'stopped' | 'drive';
export type Action = 'add' | 'remove' | 'add-100';

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

export type Winners = {
  id: number;
  wins: number;
  time: number;
};
