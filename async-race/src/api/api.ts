import { Car, OptionsStatus, Speed } from '../types/type';
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

export const editCarAPI = async (param: Car): Promise<Car> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}/${param.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  const data: Car = await response.json();
  return data;
};

export const startCarAPI = async (id: number, param: OptionsStatus): Promise<number> => {
  const response = await fetch(`${URL}${PATH_MAP.engine}?id=${id}&status=${param}`, {
    method: 'PATCH',
    body: JSON.stringify(param),
  });
  const data: Speed = await response.json();
  const time = data.distance / data.velocity;
  return time;
};
