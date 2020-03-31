import React from 'react';
import { mount } from 'enzyme';
import { FormMessage } from '../../../shared/components/Form/styled';
import Authorization from '../index';

describe('<Authorization />', () => {
  it('should render registration form', () => {
    const sut = mount(<Authorization />);

    expect(sut).toMatchSnapshot();
  });

  it('should render login form after click on redirection link', () => {
    const sut = mount(<Authorization />);

    sut.find(FormMessage).find('a').simulate('click');

    expect(sut).toMatchSnapshot();
  });
});
