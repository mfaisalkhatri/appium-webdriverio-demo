class HomePage {
  get textBtn() {
    const selector = '**/XCUIElementTypeButton[`label == "Text"`]';
    return $(`-ios class chain:${selector}`);
  }
  get notificationBtn() {
    return $("~notification");
  }

  get browserMenu() {
    return $("~Browser");
  }

  get notification() {
    const selector = '**/XCUIElementTypeButton[`label == "Notification"`]';
    return $(`-ios class chain:${selector}`);
  }

  async getProverbialText(): Promise<string> {
    const selector = 'name == "Textbox"';
    const textBox = await $(`-ios predicate string:${selector}`);
    await this.textBtn.click();
    return await textBox.getText();
  }

  async showNotification(): Promise<void> {
    await this.notificationBtn.click();
  }

  async openBrowserMenu(): Promise<void> {
    await this.browserMenu.click();
  }
}

export default new HomePage();
