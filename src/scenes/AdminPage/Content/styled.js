import styled from 'styled-components';
import * as cssConst from '../../../shared/variables';

export const Wrapper = styled.div`
  width: calc(100% - 210px);
  height: calc(100vh - 215px);
  padding: 12px 15px 20px;
  border-radius: 5px;
  background-color: #f8f9fa;
`;

export const Header = styled.p`
  margin-bottom: 10px;
  font-size: 28px;
  font-family: Roboto;
  font-weight: bold;
  color: ${cssConst.themeDark};
`;
