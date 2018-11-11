import * as React from 'react';
import * as Styles from './Header.scss';

export class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className={Styles.Header}>It works!</h1>
      </div>
    );
  }
}
