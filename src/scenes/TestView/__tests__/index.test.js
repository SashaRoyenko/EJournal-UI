import React from 'react';
import { mount } from 'enzyme';
import { url, getQuery } from '../../../shared/query/test/constants';
import TestView from '../index';

describe('<TestView />', () => {
  it('should render correctly', () => {
    const sut = mount(<TestView />);

    expect(sut).toMatchSnapshot();
  });

  it('should show user with 0 id', () => {
    const mockFetchPromise = Promise.resolve({
      json: () => [{ id: 1, firstName: 'Eric', lastName: 'Cartman', age: '10', birthDate: '10101010'}],
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const sut = mount(<TestView />);

    sut.find('button').at(1).simulate('click');

    expect(sut).toMatchSnapshot();
  });

  it('should show user with 10 id', () => {
    const valueMock = '10';
    const changeEventMock = {
      preventDefault() {},
      target: { value: valueMock }
    }
    const mockFetchPromise = Promise.resolve({
      json: () => ({ id: 1, firstName: 'Eric', lastName: 'Cartman', age: '10', birthDate: '10101010'}),
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const sut = mount(<TestView />);

    sut.find('input').simulate('change', changeEventMock);
    sut.find('button').at(0).simulate('click');

    expect(sut).toMatchSnapshot();

    expect(global.fetch).toHaveBeenCalledWith(`${url}users/user/${valueMock}`, getQuery); 
  });
});
