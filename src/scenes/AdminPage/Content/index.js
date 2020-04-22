import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import getRoutes from './contentTabs';
import { Wrapper, Header } from './styled';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    const {matchPath} = props;

    this.state = {
      routes: getRoutes(matchPath),
    };
  }

  renderHeader(){
    const { routes } = this.state;
    return (
      routes.map(route => (
        <Route key={route.id} path={route.path} component={() => <Header>{route.title}</Header>}/>
      ))
    )
  }

  renderContent(){
    const { routes } = this.state;
    return (
      routes.map(route => (
        <Route key={route.id} path={route.path} component={route.component}/>
      ))
    )
  }

  render() {
    return (
      <Wrapper>
        {this.renderHeader()}
        {this.renderContent()}
      </Wrapper>
    );
  }
}

Content.propTypes = {
  matchPath: PropTypes.string,
};

Content.defaultProps = {
  matchPath: '/',
};

