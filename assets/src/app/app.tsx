import { AppProvider, Card, Page } from "@shopify/polaris";
import * as React from "react";
import * as Styles from "./app.scss";
import { Header, Logo } from "./shared/components";

export class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <AppProvider>
        <Page title="Taskify">
          <Card sectioned={true}>
            <div className={Styles.MainContainer}>
              <div className={Styles.Topbar}>
                <Logo />
                <Header />
              </div>
            </div>
          </Card>
        </Page>
      </AppProvider>
    );
  }
}
