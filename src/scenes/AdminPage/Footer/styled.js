import styled from 'styled-components';
import * as cssConst from '../../../shared/variables';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  box-shadow: 0 8px 6px 0 ${cssConst.lightShadow};
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 15px;
  background-color: ${cssConst.themeDark};
`;

export const Label = styled.span`
  font-size: 14px;
  font-family: Roboto;
  color: ${cssConst.labelHighlight};
`;