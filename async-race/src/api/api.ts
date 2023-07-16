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

export const createCar = async (body: Car): Promise<Car> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data: Car = await response.json();
  return data;
};

export const removeCar = async (id: number): Promise<Car> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}/${id}`, {
    method: 'DELETE',
  });
  const data: Car = await response.json();
  return data;
};
