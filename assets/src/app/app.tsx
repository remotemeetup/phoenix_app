import * as React from 'react';
import * as Styles from './app.scss';
import { Header, Logo } from './shared/components';

interface OwnProps {}

export interface Props extends OwnProps {}

export class App extends React.PureComponent<Props, {}> {
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
