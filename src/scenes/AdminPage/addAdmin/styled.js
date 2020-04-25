import styled from 'styled-components';
import * as cssConst from '../../../shared/variables';

export const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: calc(100% - 36px);
  padding: 12px 15px 0px 0px;
`;

export const ItemTitle = styled.p`
  padding-bottom:10px;
`;

export const InputItem = styled.div`
  padding: 10px 30px 34px 0px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  color: ${cssConst.themeDark};
  max-width:345px;
  flex:1;

  & select {
  width:315px;
  }

  &:nth-of-type(6){
  width:400px;
  }
`;

export const Input = styled.input`
  width: 315px;
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
  
  &:hover{ 
  background-color: ${cssConst.buttonBlueOnClick};
  }
  
  &:active{
  border: 2px solid ${cssConst.turquoise};
  }
`;

