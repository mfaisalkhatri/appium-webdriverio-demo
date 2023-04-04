import HomePage from "../pageobjects/home.page";

describe("IOS Mobile automation tests", () => {
  it("should check the title on home page", async () => {
    expect(await HomePage.getProverbialText()).toEqual("Proverbial");
  });
});
