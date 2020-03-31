import { getUsers, getUserById } from '../users';
import { url, getQuery } from '../constants';

describe('users query', () => {
  beforeEach(() => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  })

  it('getUsers should fetch for all users with not ok response', () => {

    expect(global.fetch).toHaveBeenCalledTimes(0);

    getUsers();

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(`${url}users/`, getQuery);
  });

  it('getUserById should fetch for user by id with not ok response', () => {
    const id = 1;

    expect(global.fetch).toHaveBeenCalledTimes(0);

    getUserById(id);

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(`${url}users/user/${id}`, getQuery);  
  });

  it('getUsers should fetch for all users with ok response', () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    expect(global.fetch).toHaveBeenCalledTimes(0);

    getUsers();

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(`${url}users/`, getQuery);
  });

  it('getUserById should fetch for user by id with ok response', () => {
    const id = 1;
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    expect(global.fetch).toHaveBeenCalledTimes(0);

    getUserById(id);

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(`${url}users/user/${id}`, getQuery);  
  });
});
