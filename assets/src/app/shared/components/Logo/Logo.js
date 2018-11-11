import logoImage from './Logo.png';
import * as Styles from './Logo.scss';
import * as React from 'react';

export class Logo extends React.PureComponent {
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
