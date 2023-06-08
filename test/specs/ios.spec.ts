import homePage from "../pageobjects/home.page";
import browserPage from "../pageobjects/browser.page";

describe("IOS Mobile automation tests", () => {
  it("should check the title on home page", async () => {
    expect(await homePage.getProverbialText()).toEqual("Proverbial");
  });

  it("should check the notification", async () => {
    await homePage.showNotification();
    expect(await homePage.notification).toBeDisplayedInViewport();
  });

  it("should navigate to the browser menu and check find button", async () => {
    await homePage.openBrowserMenu();
    expect(await browserPage.findBtn).toBeDisplayedInViewport();
  });
});
