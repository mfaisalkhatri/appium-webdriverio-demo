class BrowserPage {
  get urlField() {
    return $("~url");
  }

  get findBtn() {
    return $("~find");
  }
}

export default new BrowserPage();
