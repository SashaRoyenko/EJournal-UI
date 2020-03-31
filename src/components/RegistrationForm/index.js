import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../shared/svg/school.svg';
import {
  FormContainer,
  FormInput,
  FormButton,
  FormMessage,
  FormLogo,
} from '../../shared/components/Form/styled';

export default class Registration extends React.Component {
  render() {
    const { onClickMessageHandler } = this.props;
    return (
      <FormContainer>
        <FormLogo src={logo} alt="logo" />
        <form>
          <FormInput type="text" placeholder="name" />
          <FormInput type="text" placeholder="username" />
          <FormInput type="password" placeholder="password" />
          <FormButton>create</FormButton>
          <FormMessage>
            <span>Not registered? </span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={onClickMessageHandler}>
              Create an account
            </a>
          </FormMessage>
        </form>
      </FormContainer>
    );
  }
}

Registration.propTypes = {
  onClickMessageHandler: PropTypes.func,
};

Registration.defaultProps = {
  onClickMessageHandler: () => {},
};
