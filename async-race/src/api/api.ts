import { Car } from '../types/type';
import { PATH_MAP, URL } from '../utils/constants';

export const getCarsAPI = async (): Promise<Car[]> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}`);
  const data: Car[] = await response.json();
  return data;
};

export const createCarAPI = async (param: Car): Promise<Car> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  const data: Car = await response.json();
  return data;
};

export const removeCarAPI = async (id: number): Promise<Car> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}/${id}`, {
    method: 'DELETE',
  });
  const data: Car = await response.json();
  return data;
};
