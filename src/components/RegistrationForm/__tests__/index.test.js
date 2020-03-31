import React from 'react';
import { mount } from 'enzyme';
import { FormMessage } from '../../../shared/components/Form/styled';
import RegistrationForm from '../index';

describe('<RegistrationForm />', () => {
  const onClickMessageHandlerMock = jest.fn();
  const mandatoryProps = {
    onClickMessageHandler: onClickMessageHandlerMock,
  };

  it('should render correctly', () => {
    const sut = mount(<RegistrationForm {...mandatoryProps} />);

    expect(sut).toMatchSnapshot();
  });

  it('should call handler on click on redirection link', () => {
    const sut = mount(<RegistrationForm {...mandatoryProps} />);

    expect(onClickMessageHandlerMock).toBeCalledTimes(0);

    sut.find(FormMessage).find('a').simulate('click');

    expect(onClickMessageHandlerMock).toBeCalledTimes(1);
  });
});
