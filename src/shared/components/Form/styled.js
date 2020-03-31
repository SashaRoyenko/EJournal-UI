import styled from 'styled-components';
import * as cssConst from '../../variables';

export const FormContainer = styled.div`
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 ${cssConst.normalShadow}, 0 5px 5px 0 ${cssConst.darkShadow};
`;

export const FormInput = styled.input`
    background: ${cssConst.lightGrey};
    font-family: ${cssConst.defaultFontFamily};
    width: 100%;
    border: none;
    margin: 0 0 15px;
    padding: 15px;
    font-size: 14px;
`;

export const FormButton = styled.button`
    font-family: ${cssConst.defaultFontFamily};
    text-transform: uppercase;
    background: ${cssConst.turquoise};
    width: 100%;
    border: none;
    padding: 15px;
    color: ${cssConst.white};
    font-size: 14px;

    &:hover,
    &:active,
    &:focus {
        background: ${cssConst.blue};
    }
`;

export const FormMessage = styled.p`
    margin: 15px 0 0;
    color: ${cssConst.grey};
    font-size: 12px;

    & a {
        color: ${cssConst.turquoise};
        text-decoration: none;
    }
`;

export const FormLogo = styled.img`
    width: 100px;
    margin: 0 0 10px;
`;
