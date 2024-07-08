import {expect, Page} from "@playwright/test";
import contactUsPageLocators from "../locators/ContactUsPageLocators";
import commonLocators from "../locators/CommonLocators";


class ContactUsPage {
    constructor(private page: Page) {}

    async visitContactUsPage() {
        await this.page
            .getByRole(contactUsPageLocators.contactButton.role,
                {name: contactUsPageLocators.contactButton.name, exact: true})
            .click();
    }

    async verifyContactUsPage() {
        await expect(this.page.locator(commonLocators.mainHeader)).toHaveText("Contact Information");
    }
}


export default ContactUsPage;