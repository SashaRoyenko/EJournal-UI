import React from 'react';
import logo from '../../shared/svg/school.svg';
import {
    FormLogo,
    FormInput,
    FormButton,
    FormMessage,
    FormContainer,
} from '../../shared/components/Form/styled.js';

export default class LoginForm extends React.Component {
    
    render() {
        return (
            <FormContainer>
                <FormLogo src={logo} alt="logo" />
                <form>
                    <FormInput type="text" placeholder="username" />
                    <FormInput type="password" placeholder='password' />
                    <FormButton>login</FormButton>
                    <FormMessage>
                        <span>Already registered? </span>
                        <a href="#" onClick={this.props.onClickMessageHandler}>Sign In</a>
                    </FormMessage>
                </form>
            </FormContainer>
        );
    }
}
