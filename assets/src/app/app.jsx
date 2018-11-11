import React from 'react';
import { render } from 'react-dom';
import * as Styles from './app.scss';
import { Header, Logo } from './shared/components';

const root = document.getElementById('root');

const element = (
  <div className={Styles.MainContainer}>
    <div className={Styles.Topbar}>
      <Logo />
      <Header />
    </div>
  </div>
);

render(element, root);
