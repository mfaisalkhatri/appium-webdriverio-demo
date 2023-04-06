import homePage from "../pageobjects/home.page";
import browserPage from "../pageobjects/browser.page";

describe("IOS Mobile automation tests", () => {
  it("should check the title on home page", async () => {
    expect(await homePage.getProverbialText()).toEqual("Proverbial");
  });

  it("should check the notification", async () => {
    expect(await homePage.showNotification()).toBeDisplayedInViewport();
  });

  it.only("should navigate to the website in mobile and verify the page header", async () => {
    await homePage.openBrowserMenu();
    expect(await browserPage.findBtn).toBeDisplayedInViewport();
  });
});
