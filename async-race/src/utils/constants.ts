import { Category, OptionsStatus, Path } from '../types/type';

export const URL = 'http://127.0.0.1:3000';

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

export const START_PAGE_GARAGE = 1;
export const CARS_ON_PAGE = 7;
export const WIDTH_GARAGE_PADDING = 150;
export const MILLISECOND = 1000;
export const CADRES = 350;
export const WIGHT_CAR = 50;
export const FIRST_NAME = ['aw', 'qwes', 'dqwe', 'fsss', 'gqwe', 'qwew', 'hqq', 'utyuj', 'qwek', 'qwerrl'];
export const LAST_NAME = ['11', '22', '33', '44', '55', '66', '77', '88', '99', '00'];
