import React from 'react';
import { mount } from 'enzyme';
import { FormMessage } from '../../../shared/components/Form/styled';
import LoginForm from '../index';

describe('<LoginForm />', () => {
  const onClickMessageHandlerMock = jest.fn();
  const mandatoryProps = {
    onClickMessageHandler: onClickMessageHandlerMock,
  };

  it('should render correctly with default props', () => {
    const sut = mount(<LoginForm />);

    expect(sut).toMatchSnapshot();

    sut.find(FormMessage).find('a').simulate('click');
  });

  it('should render correctly', () => {
    const sut = mount(<LoginForm {...mandatoryProps} />);

    expect(sut).toMatchSnapshot();
  });

  it('should call handler on click on redirection link', () => {
    const sut = mount(<LoginForm {...mandatoryProps} />);

    expect(onClickMessageHandlerMock).toBeCalledTimes(0);

    sut.find(FormMessage).find('a').simulate('click');

    expect(onClickMessageHandlerMock).toBeCalledTimes(1);
  });
});
