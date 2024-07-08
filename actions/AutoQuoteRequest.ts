import {expect, Page} from "@playwright/test";
import autoQuoteRequestLocators from "../locators/AutoQuoteRequestLocators";
import {faker} from "@faker-js/faker";


class AutoQuoteRequest {
    constructor(private page: Page) {
    }

    async clickAutoInsuranceButton() {
        await this.page
            .getByRole(autoQuoteRequestLocators.autoInsuranceButton.role, {name: autoQuoteRequestLocators.autoInsuranceButton.name,})
            .click();
    }

    async fillQuoteRequestForm() {
        await this.page.fill(autoQuoteRequestLocators.firstName, faker.person.firstName());
        await this.page.fill(autoQuoteRequestLocators.lastName, faker.person.lastName());
        await this.page.fill(autoQuoteRequestLocators.email, faker.internet.email());
        await this.page.fill(autoQuoteRequestLocators.phone, faker.phone.number());
        await this.page.fill(autoQuoteRequestLocators.zip, faker.location.zipCode());
        await this.page.selectOption(autoQuoteRequestLocators.referringAgent, {label: 'Jane Smith'});
    }

    async clickContinueStep2Button() {
        await this.page.click(autoQuoteRequestLocators.continueStep2Button);
    }

    async verifyAutoQuoteRequestPage1of4() {
        await this.page.waitForSelector(autoQuoteRequestLocators.subHeader);
        await expect(this.page.locator(autoQuoteRequestLocators.subHeader)).toHaveText("Step 1 of 4");
    }
}


export default AutoQuoteRequest;