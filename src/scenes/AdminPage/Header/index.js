import React from 'react';
import { Wrapper, HomeLink, LoginWrapper, Label, LogOutButton } from './styled';

export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <HomeLink to='/'>E-JOURNAL</HomeLink>
        <LoginWrapper>
          <Label>
            Ви увійшли як: <Label highlighted>SuperAdmin</Label>
          </Label>
          <LogOutButton>Вийти</LogOutButton>
        </LoginWrapper>
      </Wrapper>
    );
  }
}
