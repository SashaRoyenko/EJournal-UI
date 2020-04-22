import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as cssConst from '../../../shared/variables';

export const Wrapper = styled.div`
  overflow: hidden;
  margin-right: 20px;
  border-radius: 5px;
  width: 190px;
  height: calc(100vh - 215px);
  background-color: ${cssConst.themeMedium};
`;

export const MenuItem = styled(Link)`
  display: block;
  border-bottom: solid 1px ${cssConst.themeLight};
  padding: 10px 15px;
  font-size: 16px;
  font-family: Roboto;
  text-decoration: none;
  color: ${cssConst.labelHighlight};

  &:active {
    background: ${cssConst.themeLightMedium};
  }
`;
