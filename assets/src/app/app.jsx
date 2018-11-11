import React from 'react';
import * as Styles from './app.scss';
import { Header, Logo } from './shared/components';

export class App extends React.PureComponent {
  render() {
    return (
      <div className={Styles.MainContainer}>
        <div className={Styles.Topbar}>
          <Logo />
          <Header />
        </div>
      </div>
    );
  }
}
