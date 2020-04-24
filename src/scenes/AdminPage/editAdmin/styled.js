import styled from 'styled-components';
import * as cssConst from '../../../shared/variables';

export const Wrapper = styled.div`
  width: calc(100% - 210px);
  height: calc(100vh - 215px);
  padding: 12px 15px 20px 0px;
  border-radius: 5px;
`;

export const ItemTitle = styled.p`
  padding-bottom:10px;
`;

export const TableItem = styled.td`
  padding: 10px 30px 34px 0px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  color: ${cssConst.themeDark};
`;

export const Input = styled.input`
  width: 275px;
  height: 25px;
  border-radius: 3px;
  border: solid 1px #495057;
  background-color: #ffffff;
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 7px;
  font-family: Roboto;
  background-color: ${cssConst.buttonBlue};
  font-size: 12px;
  color: white;
  font-weight: bold;
  border:none;
  
  &:active{
  background-color: ${cssConst.buttonBlueOnClick};
  border: 2px solid ${cssConst.turquoise};
  }
`;
