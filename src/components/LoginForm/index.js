import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../shared/svg/school.svg';
import {
  FormLogo,
  FormInput,
  FormButton,
  FormMessage,
  FormContainer,
} from '../../shared/components/Form/styled';

export default class LoginForm extends React.Component {
  render() {
    const { onClickMessageHandler } = this.props;
    return (
      <FormContainer>
        <FormLogo src={logo} alt="logo" />
        <form>
          <FormInput type="text" placeholder="username" />
          <FormInput type="password" placeholder="password" />
          <FormButton>login</FormButton>
          <FormMessage>
            <span>Already registered? </span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={onClickMessageHandler}>Sign In</a>
          </FormMessage>
        </form>
      </FormContainer>
    );
  }
}

LoginForm.propTypes = {
  onClickMessageHandler: PropTypes.func,
};

LoginForm.defaultProps = {
  onClickMessageHandler: () => {},
};
