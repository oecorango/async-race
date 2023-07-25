export type Path = '/garage' | '/engine' | '/winners';
export type Category = 'garage' | 'engine' | 'winners';
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

// export type OptionsWinners = '_page=' | '_limit=' | '_sort=' | '_order=';