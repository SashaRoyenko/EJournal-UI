import React from 'react'
import logo from '../../shared/svg/school.svg';
import {
    FormContainer,
    FormInput,
    FormButton,
    FormMessage,
    FormLogo,
} from '../../shared/components/Form/styled.js';

export default class Registration extends React.Component {
    
    render() {
        return (
            <FormContainer>
                <FormLogo src={logo} alt="logo" />
                <form>
                    <FormInput type="text" placeholder="name"/>
                    <FormInput type="text" placeholder="username" />
                    <FormInput type="password" placeholder='password' />
                    <FormButton>create</FormButton>
                    <FormMessage>
                        <span>Not registered? </span>
                        <a href="#" onClick={this.props.onClickMessageHandler} >Create an account</a>
                    </FormMessage>
                </form>
            </FormContainer>
        );
    }
}
