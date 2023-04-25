export const CONTEXT_REF = {
  NATIVE: "native",
  WEBVIEW: "webview",
};

class BrowserPage {
  get urlField() {
    return $("~url");
  }

  get findBtn() {
    return $("~find");
  }

  // get pageHeader() {
  //   return $("h1");
  // }

  // async waitForWebViewContextLoaded():Promise<void> {
  //   await driver.waitUntil(
  //     async () => {
  //       const currentContexts = await driver.getContexts();

  //       return (
  //         currentContexts.length > 1 &&
  //         currentContexts.find((context) =>
  //           context.toString().toLowerCase().includes(CONTEXT_REF.WEBVIEW)
  //         ) !== "undefined"
  //       );
  //     },
  //     {
  //       // Wait a max of 45 seconds. Reason for this high amount is that loading
  //       // a webview for iOS might take longer
  //       timeout: 45000,
  //       timeoutMsg: "Webview context not loaded",
  //       interval: 100,
  //     }
  //   );
  // }

  // async switchToContext():Promise<void> {
  //   // The first context will always be the NATIVE_APP,
  //   // the second one will always be the WebdriverIO web page
  //   //await driver.switchContext((await this.getCurrentContexts())[context === CONTEXT_REF.NATIVE ? 0 : 1]);

  //   const contexts = await driver.getContexts();

  //   for (let context in contexts) {
  //     if (context !== CONTEXT_REF.NATIVE) {
  //       await driver.switchContext(context);
  //       break;
  //     }
  //   }

  //   //await driver.switchContext(await driver.getContexts()[1]);
  // }

  // async navigateToLambdaTestWebsite():Promise<void> {
  //   await this.urlField.navigateTo("https://www.lambdatest.com");
  //   await this.findBtn.click();
  // }

  // async getPageHeaderText(): Promise<string> {
  //   await this.waitForWebViewContextLoaded();
  //   await this.switchToContext();
  //   return await this.pageHeader.getText();
  // }
}

export default new BrowserPage();
