class HomePage {
  get textBtn() {
    const selector = '**/XCUIElementTypeButton[`label == "Text"`]';
    return $(`-ios class chain:${selector}`);
  }

  async getProverbialText(): Promise<string> {
    const selector = 'name == "Textbox"';
    const textBox = await $(`-ios predicate string:${selector}`);
    await this.textBtn.click();
    return await textBox.getText();
  }

  get notificationBtn() {
    return $('~notification');
  }

  get notification() {
    const selector = '**/XCUIElementTypeButton[`label == "Notification"`]';
    return $(`-ios class chain:${selector}`);
  }

  async isNotificationDisplayed():Promise<boolean> {
    await this.notificationBtn.click();
    return await this.notification.isDisplayed();
  }
}

export default new HomePage();
