import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import AdminPage from '../index';

describe('<AdminPage />', () => {
  it('should render AdminPage', () => {
    const sut = mount(<Router><AdminPage /></Router>);

    expect(sut).toMatchSnapshot();
  });
});
