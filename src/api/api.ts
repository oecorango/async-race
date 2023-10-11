import { CARS_ON_PAGE } from '../constants/api';
import { URL_ENGINE, URL_GARAGE, URL_WINNERS } from '../constants/routes';
import { Car, DriveMode, OptionsStatus, Speed, Winners } from '../types/type';

export const getCarsAPI = async (): Promise<Car[] | null> => {
  const response = await fetch(`${URL_GARAGE}`);
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const getCarAPI = async (id: number): Promise<Car | null> => {
  const response = await fetch(`${URL_GARAGE}${id}`);
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const getCarsOnPageAPI = async (currentPage: number): Promise<Car[] | null> => {
  const response = await fetch(`${URL_GARAGE}?_page=${currentPage}&_limit=${CARS_ON_PAGE}`);
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const createCarAPI = async (param: Car): Promise<Car | null> => {
  const response = await fetch(`${URL_GARAGE}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });

  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const removeCarAPI = async (id: number): Promise<Car | null> => {
  const response = await fetch(`${URL_GARAGE}${id}`, {
    method: 'DELETE',
  });
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const editCarAPI = async (param: Car): Promise<Car | null> => {
  const response = await fetch(`${URL_GARAGE}${param.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const startCarAPI = async (id: number, param: OptionsStatus): Promise<number | null> => {
  const response = await fetch(`${URL_ENGINE}?id=${id}&status=${param}`, {
    method: 'PATCH',
    body: JSON.stringify(param),
  });
  try {
    const data: Speed = await response.json();
    const time = data.distance / data.velocity;
    return time;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export async function driveCarAPI(id: number, param: OptionsStatus): Promise<DriveMode | null> {
  const response = await fetch(`${URL_ENGINE}?id=${id}&status=${param}`, {
    method: 'PATCH',
    body: JSON.stringify(param),
  });
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function stopCarAPI(id: number, param: OptionsStatus): Promise<DriveMode | null> {
  const response = await fetch(`${URL_ENGINE}?id=${id}&status=${param}`, {
    method: 'PATCH',
    body: JSON.stringify(param),
  });
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function startAllCarAPI(cars: Car[], param: OptionsStatus): Promise<Response[] | null> {
  const response = cars.map((car) =>
    fetch(`${URL_ENGINE}?id=${car.id}&status=${param}`, {
      method: 'PATCH',
      body: JSON.stringify(param),
    }),
  );
  try {
    return await Promise.all(response);
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function getWinnersAPI(currentPage = 1): Promise<Winners[] | null> {
  return fetch(`${URL_WINNERS}?_page=${currentPage}&_limit=10`).then(async (response) => {
    if (response.ok) {
      return response.json();
    }
    return null;
  });
}

export async function createWinnerAPI(id: number, time: number, wins = 1): Promise<Winners | null> {
  const param = { id, wins, time };
  const response = await fetch(`${URL_WINNERS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function getWinnerAPI(id: number): Promise<Winners | null> {
  const response = await fetch(`${URL_WINNERS}${id}`);
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function updateWinnerAPI(id: number, wins: number, time: number): Promise<Winners | null> {
  const param = { wins, time };
  const response = await fetch(`${URL_WINNERS}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export const removeWinnerAPI = async (id: number): Promise<Winners | null> => {
  const response = await fetch(`${URL_WINNERS}${id}`, {
    method: 'DELETE',
  });
  try {
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
  return null;
};
