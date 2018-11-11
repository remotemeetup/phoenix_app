import logoImage from './Logo.png';
import * as Styles from './Logo.scss';
import * as React from 'react';

interface OwnProps {}

export interface Props extends OwnProps {}

export class Logo extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div>
        <a href='/' className={Styles.Logo}>
          <img src={logoImage} alt='Go to home page' width="30" height="30" />
        </a>
      </div>
    );
  }
}
