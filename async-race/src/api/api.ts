import { Car, DriveMode, OptionsStatus, Speed, Winners } from '../types/type';
import { PATH_MAP, URL } from '../utils/constants';

/* И да, тут самое то надо было бы сделать через class это все,
но понял это только тогда, когда код очень сильно увеличился, 
а функции то по сути все одинаковые, но понял что переделывать - потратить много времени */

export const getCarsAPI = async (): Promise<Car[] | null> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}`);
  try {
    const data: Car[] = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const getCarAPI = async (id: number): Promise<Car | null> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}/${id}`);
  try {
    const data: Car = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const getCarsOnPageAPI = async (currentPage: number): Promise<Car[] | null> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}?_page=${currentPage}&_limit=7`);
  try {
    const data: Car[] = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const createCarAPI = async (param: Car): Promise<Car | null> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });

  try {
    const data: Car = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const removeCarAPI = async (id: number): Promise<Car | null> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}/${id}`, {
    method: 'DELETE',
  });
  try {
    const data: Car = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const editCarAPI = async (param: Car): Promise<Car | null> => {
  const response = await fetch(`${URL}${PATH_MAP.garage}/${param.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  try {
    const data: Car = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};

export const startCarAPI = async (id: number, param: OptionsStatus): Promise<number | null> => {
  const response = await fetch(`${URL}${PATH_MAP.engine}?id=${id}&status=${param}`, {
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
  const response = await fetch(`${URL}${PATH_MAP.engine}?id=${id}&status=${param}`, {
    method: 'PATCH',
    body: JSON.stringify(param),
  });
  try {
    const data: DriveMode = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function stopCarAPI(id: number, param: OptionsStatus): Promise<DriveMode | null> {
  const response = await fetch(`${URL}${PATH_MAP.engine}?id=${id}&status=${param}`, {
    method: 'PATCH',
    body: JSON.stringify(param),
  });
  try {
    const data: DriveMode = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function startAllCarAPI(cars: Car[], param: OptionsStatus): Promise<Response[] | null> {
  const response = cars.map((car) =>
    fetch(`${URL}${PATH_MAP.engine}?id=${car.id}&status=${param}`, {
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
  return fetch(`${URL}${PATH_MAP.winners}?_page=${currentPage}&_limit=10`).then(async (response) => {
    if (response.ok) {
      return response.json();
    }
    return null;
  });
}

export async function createWinnerAPI(id: number, time: number, wins = 1): Promise<Winners | null> {
  const param = { id, wins, time };
  const response = await fetch(`${URL}${PATH_MAP.winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  try {
    const data: Winners = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function getWinnerAPI(id: number): Promise<Winners | null> {
  const response = await fetch(`${URL}${PATH_MAP.winners}/${id}`);
  try {
    const data: Winners = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function updateWinnerAPI(id: number, wins: number, time: number): Promise<Winners | null> {
  const param = { wins, time };
  const response = await fetch(`${URL}${PATH_MAP.winners}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  try {
    const data: Winners = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export const removeWinnerAPI = async (id: number): Promise<Winners | null> => {
  const response = await fetch(`${URL}${PATH_MAP.winners}/${id}`, {
    method: 'DELETE',
  });
  try {
    const data: Winners = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};
