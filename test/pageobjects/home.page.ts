class HomePage {
  get textBtn() {
    const selector = '**/XCUIElementTypeButton[`label == "Text"`]';
    return $(`-ios class chain:${selector}`);
  }

  get proverbialText() {
    const selector = 'name == "Textbox"';
    return $(`-ios predicate string:${selector}`);
  }

  async getProverbialText(): Promise<string> {
    await this.textBtn.click();
    return await this.proverbialText.getText();
  }
}

export default new HomePage();
