import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/index.jsx';
import LoginForm from '../../components/LoginForm/index.jsx';
import {
    PageContainer,
} from './styled.js';

export default class Authorization extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            registration: false,
        }

        this.switchForm = this.switchForm.bind(this);
    }

    switchForm() {
        this.setState((state) => ({registration: !state.registration}));
    }

    render() {
        return (
            <PageContainer>
                {
                    this.state.registration ? (
                        <RegistrationForm onClickMessageHandler={this.switchForm}/>
                    ) : (
                        <LoginForm onClickMessageHandler={this.switchForm}/>
                    )
                }
            </PageContainer>
        );
    }
}
