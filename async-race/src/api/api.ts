import { Car } from '../types/type';
import { PATH_MAP, URL } from '../utils/constants';

// type Arr = Car[];

// export const generateQueryString = (queryParams: Arr = []) =>
//   queryParams.length ? `${queryParams.map((x) => `${x.color}=${x.name}`).join('&')}` : '';

export const getCar = async (): Promise<Car[]> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}`);
  const data: Car[] = await response.json();
  return data;
};
