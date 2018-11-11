import * as React from 'react';
import * as Styles from './Header.scss';

interface OwnProps {}

export interface Props extends OwnProps {}

export class Header extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div>
        <h1 className={Styles.Header}>It works!</h1>
      </div>
    );
  }
}
