import React from 'react';
import Header from './Header/index';
import Aside from './Aside/index';
import Footer from './Footer/index';
import Content from './Content/index';
import { Wrapper, Main } from './styled';

export default class AdminPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Aside matchPath='/admin' />
          <Content matchPath='/admin' />
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}
