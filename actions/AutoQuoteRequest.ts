import {expect, Page} from "@playwright/test";
import autoQuoteRequestLocators from "../locators/AutoQuoteRequestLocators";


class AutoQuoteRequest {
    constructor(private page: Page) {
    }

    async clickAutoInsuranceButton() {
        await this.page
            .getByRole(autoQuoteRequestLocators.autoInsuranceButton.role, {name: autoQuoteRequestLocators.autoInsuranceButton.name,})
            .click();
    }

    async fillQuoteRequestForm(firstName: string, lastName: string, email: string, phone: string, zip: string) {
        await this.page.fill(autoQuoteRequestLocators.firstName, firstName);
        await this.page.fill(autoQuoteRequestLocators.lastName, lastName);
        await this.page.fill(autoQuoteRequestLocators.email, email);
        await this.page.fill(autoQuoteRequestLocators.phone, phone);
        await this.page.fill(autoQuoteRequestLocators.zip, zip);
        await this.page.selectOption(autoQuoteRequestLocators.referringAgent, {label: 'Jane Smith'});
    }

    async clickContinueStep2Button() {
        await this.page.click(autoQuoteRequestLocators.continueStep2Button);
    }

    async verifyAutoQuoteRequestPage1of4() {
        await expect(this.page.locator(autoQuoteRequestLocators.subHeader)).toHaveText("Step 1 of 4");
    }
}


export default AutoQuoteRequest;