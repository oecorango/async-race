import { Car, DriveMode, OptionsStatus, Speed } from '../types/type';
import { PATH_MAP, URL } from '../utils/constants';

export const getCarsAPI = async (): Promise<Car[] | null> => {
  try {
    const response = await fetch(`${URL}${PATH_MAP.garage}`);
    const data: Car[] = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const createCarAPI = async (param: Car): Promise<Car | null> => {
  try {
    const response = await fetch(`${URL}${PATH_MAP.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    const data: Car = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const removeCarAPI = async (id: number): Promise<Car | null> => {
  try {
    const response = await fetch(`${URL}${PATH_MAP.garage}/${id}`, {
      method: 'DELETE',
    });
    const data: Car = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const editCarAPI = async (param: Car): Promise<Car | null> => {
  try {
    const response = await fetch(`${URL}${PATH_MAP.garage}/${param.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    const data: Car = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const startCarAPI = async (id: number, param: OptionsStatus): Promise<number | null> => {
  try {
    const response = await fetch(`${URL}${PATH_MAP.engine}?id=${id}&status=${param}`, {
      method: 'PATCH',
      body: JSON.stringify(param),
    });
    const data: Speed = await response.json();
    const time = data.distance / data.velocity;
    return time;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export async function driveCarAPI(id: number, param: OptionsStatus): Promise<DriveMode | null> {
  try {
    const response = await fetch(`${URL}${PATH_MAP.engine}?id=${id}&status=${param}`, {
      method: 'PATCH',
      body: JSON.stringify(param),
    });
    if (response.status === 200) {
      const data: DriveMode = await response.json();
      return data;
    }
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function stopCarAPI(id: number, param: OptionsStatus): Promise<DriveMode | null> {
  try {
    const response = await fetch(`${URL}${PATH_MAP.engine}?id=${id}&status=${param}`, {
      method: 'PATCH',
      body: JSON.stringify(param),
    });
    const data: DriveMode = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
}
