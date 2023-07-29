import { Category, OptionsStatus, Path } from '../types/type';

export const URL_API = 'http://127.0.0.1:3000';

export const PATH_MAP: Record<Category, Path> = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
};

export const OPTIONS_MAP: Record<OptionsStatus, OptionsStatus> = {
  started: 'started',
  drive: 'drive',
  stopped: 'stopped',
};
