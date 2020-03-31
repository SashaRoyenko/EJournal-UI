import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/index';
import LoginForm from '../../components/LoginForm/index';
import {
  PageContainer,
} from './styled';

export default class Authorization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registration: false,
    };

    this.switchForm = this.switchForm.bind(this);
  }

  switchForm() {
    this.setState((state) => ({ registration: !state.registration }));
  }

  render() {
    const { registration } = this.state;
    return (
      <PageContainer>
        {
            registration ? (
              <RegistrationForm onClickMessageHandler={this.switchForm} />
            ) : (
              <LoginForm onClickMessageHandler={this.switchForm} />
            )
        }
      </PageContainer>
    );
  }
}
