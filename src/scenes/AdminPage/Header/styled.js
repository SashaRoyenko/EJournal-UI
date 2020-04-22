import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as cssConst from '../../../shared/variables';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  box-shadow: 0 8px 6px 0 ${cssConst.lightShadow};
  border-radius: 5px;
  width: 100%;
  height: 100px;
  padding: 15px;
  background-color: ${cssConst.themeDark};
`;

export const HomeLink = styled(Link)`
  font-size: 34px;
  font-family: Roboto;
  text-decoration: none;
  color: ${cssConst.labelHighlight};
`;

export const LoginWrapper = styled.div`
  width: 240px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-family: Roboto;
  font-weight: ${(p) => (p.highlighted ? 'bold' : 'normal')};
  text-decoration: ${(p) => (p.highlighted ? 'underline' : 'none')};
  color: ${(p) => (p.highlighted ? cssConst.labelHighlight : cssConst.labelDefault)};
`;

export const LogOutButton = styled.button`
  margin: 4px 0 0;
  border: none;
  padding: 0;
  background: none;
  font-size: 16px;
  font-family: Roboto;
  color: ${cssConst.labelHighlight};

  &:hover{
    text-decoration: underline;
  }
`;
