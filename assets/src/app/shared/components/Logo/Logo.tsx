import * as React from "react";
import logoImage from "./Logo.png";
import * as Styles from "./Logo.scss";

export class Logo extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div>
        <a href="/" className={Styles.Logo}>
          <img src={logoImage} alt="Go to home page" width="30" height="30" />
        </a>
      </div>
    );
  }
}
