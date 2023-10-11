import { OptionsStatus } from '../types/type';

export const OPTIONS_MAP: Record<OptionsStatus, OptionsStatus> = {
  started: 'started',
  drive: 'drive',
  stopped: 'stopped',
};
export const CARS_ON_PAGE = 7;
export const START_PAGE_GARAGE = 1;
export const WINNERS_ON_PAGE = 10;
