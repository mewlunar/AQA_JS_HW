import { Given, Then, When } from "@wdio/cucumber-framework";
import signInPage from "../pages/signIn.page";
import pages from "../pages/page-factory";

Given(/^I open Sales Portal$/, async function () {
  await signInPage.open();
});

When(
  /^I enter "([^"]*)" to "([^"]*)" on "([^"]*)" page$/,
  async function (value: string, element: string, page: string) {
    await pages[page].setValue(pages[page][element], value);
  }
);

When(/^I click on "([^"]*)" on "([^"]*)" page$/, async function (element: string, page: string) {
  await pages[page].click(pages[page][element]);
});

When(
    /^I click on Menu Button "([^"]*)" on "([^"]*)" page$/,
    async function (element: string, page: string) {
        await pages[page].click(pages[page]["Menu Button"](element));
    },
);

Then(
  /^I should( not)? see "([^"]*)" (with|contains) text "([^"]*)"( on "([^"]*)" on modal)? on "([^"]*)" page$/,
  async function (not: string, element: string, compareMethod: string, text: string, modal: string, page: string) {
    const actualText = modal
      ? await pages[page].getText(pages[page][modal][element])
      : await pages[page].getText(pages[page][element]);
    if (not) {
      compareMethod === "contains" ? expect(actualText).not.toContain(text) : expect(actualText).not.toBe(text);
    } else {
      compareMethod === "contains" ? expect(actualText).toContain(text) : expect(actualText).toBe(text);
    }
  }
);

Then(/^I should( not)? see "([^"]*)"$/, async function (not: string, selector: string) {
  await $(selector).waitForDisplayed({ reverse: !!not });
});

Then(
    /^I select "([^"]*)" to "([^"]*)" on "([^"]*)" page$/,
    async function (value: string, element: string, page: string) {
        await pages[page].selectDropdownValue(pages[page][element], value);
    },
);

Then(
  /^I should see notification (with|contains) text "([^"]*)" on "([^"]*)" page$/,
  async function (method: string, message: string, page: string) {
    const notification = await pages[page].getNotificationByText(message, method);
    const actualMessage = await pages[page].getText(notification);
    expect(actualMessage).toBe(message);
  }
);

When(
  /^I select "([^"]*)" from "([^"]*)" on "([^"]*)" page$/,
  async function (value: string, element: string, page: string) {
    await pages[page].selectDropdownValue(pages[page][element], value);
  }
);

Then(/^I wait for "([^"]*)" seconds$/, async function (seconds: string) {
  await browser.pause(+seconds * 1000);
});

Then(/^I wait that "([^"]*)" page is loaded$/, async function (page: string) {
    await pages[page].waitForPageOpened()
});
